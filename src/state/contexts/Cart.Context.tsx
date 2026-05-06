import { createContext, useState, useEffect, useContext, type ReactNode, useCallback } from 'react';
import { AuthContext } from './Auth.Context';


export interface Product { id: number; title: string; price: number; author: string; imageUrl?: string; }
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

] as CartItem[];


export const CartProvider = ({ children }: { children: ReactNode }) => {
    const auth = useContext(AuthContext);
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

    const addToCart = useCallback((product: Product) => {
        if (!auth?.isAuthenticated) {
            alert('Debes iniciar sesión para agregar productos al carrito');
            return;
        }
        setCart((prevCart) => {
            const existing = prevCart.find((item) => item.id === product.id);
            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        alert(`Agregaste "${product.title}" al carrito`);
    }, [auth]);


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
        localStorage.removeItem('shopping-cart');
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
