import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';

// Interfaces (se mantienen igual)
export interface Product { id: number; name: string; price: number; }
export interface CartItem extends Product { quantity: number; }

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void; // 1. Vaciar carrito
    getTotal: () => number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    // 2. Persistencia: Inicializamos con lo que haya en LocalStorage
    const [cart, setCart] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('shopping-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    
    useEffect(() => {
        localStorage.setItem('shopping-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // 3. Cantidades no bajan de cero (Lógica de eliminación mejorada)
    const removeFromCart = (id: number) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === id);
            if (existing && existing.quantity > 1) {
                // Si hay más de uno, restamos cantidad
                return prev.map(item => 
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            // Si solo hay uno, lo eliminamos de la lista
            return prev.filter((item) => item.id !== id);
        });
    };

    // 1. Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook personalizado
export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) throw new Error('useCart debe ser usado dentro de un CartProvider');
    return context;
};
