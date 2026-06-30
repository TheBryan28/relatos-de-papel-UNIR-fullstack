import { useState, useEffect, useRef, useContext } from 'react';
import { Client } from '@stomp/stompjs';
import { AuthContext } from '../../../state/contexts/Auth.Context';
import { FiMessageSquare, FiSend, FiX } from 'react-icons/fi';

interface Message {
  text: string;
  sender: 'client' | 'agent';
  timestamp: Date;
}

export default function SupportChat() {
  const auth = useContext(AuthContext);
  const user = auth?.user;
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: '¡Hola! ¿En qué puedo ayudarte hoy con Relatos de Papel?', sender: 'agent', timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [connected, setConnected] = useState(false);
  
  const stompClientRef = useRef<Client | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when a new message arrives
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (!user) return;

    // Use '123456' as CLIENT_ID to match the backend hardcoded topic
    const clientId = '123456';

    // 1. Configurar la URL dinámica
    const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:8762/';
    const wsUrl = apiBaseUrl.replace(/^http/, 'ws').replace(/\/$/, '') + '/orders-communications/ws-api/v1/communications';

    // 2. Crear y configurar el cliente STOMP
    const client = new Client({
      brokerURL: wsUrl,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    // 3. Callback al conectar con éxito
    client.onConnect = () => {
      setConnected(true);
      console.log('Conectado al WebSocket del Gateway con CLIENT_ID:', clientId);
      
      // Suscribirse a las respuestas de la IA
      client.subscribe(`/topic/support/${clientId}`, (message) => {
        try {
          const payload = JSON.parse(message.body);
          setMessages((prev) => [
            ...prev,
            { text: payload.message, sender: 'agent', timestamp: new Date() }
          ]);
        } catch (e) {
          console.error('Error parseando mensaje recibido:', e);
        }
      });
    };

    client.onDisconnect = () => {
      setConnected(false);
      console.log('Desconectado del WebSocket');
    };

    client.onStompError = (frame) => {
      console.error('Error de STOMP:', frame.headers['message']);
    };

    client.activate();
    stompClientRef.current = client;

    return () => {
      if (stompClientRef.current) {
        stompClientRef.current.deactivate();
      }
    };
  }, [user]);

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !stompClientRef.current || !connected || !user) return;

    const clientId = '123456';
    const payload = {
      clientId: clientId,
      message: inputMessage.trim(),
      type: 'CLIENT_MESSAGE',
      sender: 'CLIENT'
    };

    // Enviar el mensaje al canal de soporte del backend
    stompClientRef.current.publish({
      destination: '/relatosdepapel-orders/support/message',
      body: JSON.stringify(payload)
    });

    // Agregar nuestro propio mensaje a la interfaz
    setMessages((prev) => [
      ...prev,
      { text: inputMessage.trim(), sender: 'client', timestamp: new Date() }
    ]);
    
    setInputMessage('');
  };

  if (!user) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-(--btn-color) text-(--btn-text) shadow-lg hover:bg-(--btn-hover) transition-all duration-300 hover:scale-105"
        >
          <FiMessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="flex h-[450px] w-[350px] flex-col rounded-2xl border border-(--line) bg-(--panel) shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-(--line) p-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="h-8 w-8 rounded-full bg-(--surface-strong) flex items-center justify-center text-sm font-bold text-(--txt-color)">
                  IA
                </div>
                <span className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-(--panel) ${connected ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-(--txt-color)">Soporte con IA</h3>
                <p className="text-[10px] text-(--txt-secondary)">
                  {connected ? 'En línea' : 'Desconectado'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-(--txt-secondary) hover:bg-(--bg-color) hover:text-(--txt-color) transition"
            >
              <FiX className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => {
              const isClient = msg.sender === 'client';
              return (
                <div
                  key={index}
                  className={`flex ${isClient ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-xl px-3.5 py-2 text-sm shadow-sm ${
                      isClient
                        ? 'bg-(--btn-color) text-(--btn-text) rounded-tr-none'
                        : 'bg-(--surface-strong) text-(--txt-color) rounded-tl-none'
                    }`}
                  >
                    <p className="leading-relaxed wrap-break-word">{msg.text}</p>
                    <span className={`block text-[9px] mt-1 text-right ${isClient ? 'text-(--btn-text)/70' : 'text-(--txt-secondary)'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-(--line) p-3">
            <div className="flex items-center gap-2 rounded-lg bg-(--input-bg) border border-(--input-border) px-3 py-1.5 focus-within:border-(--txt-color) transition">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={connected ? 'Escribe tu mensaje...' : 'Conectando con soporte...'}
                disabled={!connected}
                className="flex-1 bg-transparent text-sm text-(--txt-color) outline-none placeholder-(--placeholder) disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={!connected || !inputMessage.trim()}
                className="rounded-full p-1.5 text-(--txt-color) hover:bg-(--bg-color) disabled:opacity-40 disabled:hover:bg-transparent transition"
              >
                <FiSend className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
