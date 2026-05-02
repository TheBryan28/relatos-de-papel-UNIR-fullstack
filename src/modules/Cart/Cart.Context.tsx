import { createContext, useState, useEffect, useContext, type ReactNode } from 'react';


export interface Product { id: number; title: string; price: number; }
export interface CartItem extends Product { quantity: number; }

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void; 
    getTotal: () => number;
}


export const CartContext = createContext<CartContextType | undefined>(undefined);

const itemInicial = [
  {
    id: 1,
    title: "Cien años de soledad",
    price: 45,
    quantity: 1
  }
];


export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    
    // Si hay datos guardados, úsalos
    if (savedCart) {
        return JSON.parse(savedCart);
    }

    // SI NO HAY NADA (primera vez o carrito vacío), carga el de prueba
    return itemInicial; 
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


    const removeFromCart = (id: number) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === id);
            if (existing && existing.quantity > 1) {
                // Si hay más de uno, restamos cantidad
                return prev.map(item => 
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
  
            return prev.filter((item) => item.id !== id);
        });
    };


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
