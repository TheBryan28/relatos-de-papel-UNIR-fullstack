import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckDouble } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';
import Button from '../../../components/ui/Button';

const PaymentConfirmed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-[70vh] px-6 py-12 md:px-12" style={{ color: 'var(--txt-color)' }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-2">
        <section>
          <div className="mb-6 flex items-center gap-4">
            <div
              className="rounded-md p-3"
              style={{ backgroundColor: 'var(--confirmation)', color: 'var(--btn-text)' }}
            >
              <FaCheckDouble className="h-5 w-5" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              ORDEN
              <br />
              COMPLETADA
            </h1>
          </div>

          <p className="text-sm font-semibold uppercase" style={{ color: 'var(--txt-secondary)' }}>
            Relatos de papel
          </p>

          <div
            className="mb-6 rounded p-6"
            style={{
              backgroundColor: 'var(--panel)',
              boxShadow: `0 2px 6px rgba(var(--shadow-color), 0.06)`,
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--txt-secondary)' }}>
                No. Referencia
              </span>
              <span className="font-semibold">#RP-12345</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--txt-secondary)' }}>
                Fecha
              </span>
              <span className="font-semibold">{new Date().toDateString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--txt-secondary)' }}>
                Monto total
              </span>
              <span className="font-semibold">$120.000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--txt-secondary)' }}>
                Metodo de pago
              </span>
              <span className="font-semibold">Tarjeta de credito</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm" style={{ color: 'var(--txt-secondary)' }}>
                Tiempo estimado entrega
              </span>
              <span className="font-semibold">Oct 24 — Oct 26</span>
            </div>
          </div>

          <p className="mb-6 text-sm" style={{ color: 'var(--txt-secondary)' }}>
            Su selección se está preparando en nuestro archivo central. Se le ha enviado un correo
            electrónico de confirmación y un número de seguimiento a su dirección de correo
            electrónico registrada.
          </p>

          <Button onClick={() => navigate('/')} variant="primary">
            Ir a biblioteca
          </Button>
        </section>

        <aside
          className="hidden flex-col justify-between rounded p-6 md:block"
          style={{ backgroundColor: 'var(--panel)' }}
        >
          <div>
            <div
              className="h-1 w-10"
              style={{ backgroundColor: 'var(--btn-color)', marginBottom: '1rem' }}
            />
          </div>

          <div className="flex items-center justify-center opacity-90">
            <FaBookBookmark className="h-36 w-36" style={{ color: 'var(--btn-color)' }} />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default PaymentConfirmed;
