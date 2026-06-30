import { useCart } from '../../../state/contexts/Cart.Context'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, getTotal, removeFromCart, addToCart, clearCart } = useCart()
    const navigate = useNavigate();



  return (
      <main className="relative min-h-screen overflow-hidden bg-(--bg-color) px-4 py-6 text-(--txt-color) sm:px-6 lg:px-8">
      {}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--shadow-color),0.08)_1px,transparent_0)] bg-size-[18px_18px] opacity-40" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col gap-6 rounded-[36px] border border-(--line) bg-(--panel)/80 p-4 shadow-[0_32px_90px_rgba(var(--shadow-color),0.08)] backdrop-blur-sm md:p-6">
         
          <section className="flex flex-col gap-6">
          {}
          <div className="space-y-3 px-2">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-(--txt-color) sm:text-4xl">
              Tu Carrito
            </h2>
            <p className="text-base leading-7 text-(--muted)">
              {cart.length > 0 
                ? `Tienes ${cart.length} productos listos para procesar.` 
                : "Tu carrito está vacío. ¡Explora nuestros Relatos de Papel!"}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {}
                        <div className="lg:col-span-2 space-y-4">
              {cart.length === 0 ? (
                <Card className="bg-(--panel)/40 border-dashed border-(--line) p-12 text-center">
                  <p className="text-(--muted)">No hay artículos aquí todavía.</p>
                  <Button variant="secondary" id="cart-go-to-store" className="mt-4" onClick={() => navigate('/catalog')}>
                    Ir a la tienda
                  </Button>
                </Card>
              ) : (
              
              cart.map((item) => (
                  <Card id={`cart-item-${item.id}`} key={item.id} className="bg-(--panel)/70 p-4 flex items-center justify-between border-(--line) hover:border-(--btn-color)/30 transition-colors">
                    <div>
                      <div className="flex items-center gap-4">
                        {item.imageUrl && (
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="h-20 w-16 object-cover rounded"
                          />
                        )}
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-sm text-(--muted)">Autor: {item.author}</p>
                          <p className="text-sm text-(--muted)">Precio: ${item.price}</p>
                        </div>
                      </div>
                    </div>

                  <div className="flex items-center gap-4">
                      <div className="flex items-center border border-(--line) rounded-xl bg-(--input-bg) overflow-hidden">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="px-3 py-1 hover:bg-(--line) hover:text-(--btn-color) transition-all"
                        >
                          -
                     </button>
                        <span className="px-2 font-medium min-w-[3ch] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="px-3 py-1 hover:bg-(--line) hover:text-(--btn-color) transition-all"
                        >
                          +
                        </button>
                      </div>
                    <p className="font-bold text-(--txt-color) min-w-20 text-right">
                        ${(item.price * item.quantity)}
                      </p>
                    </div>
                  </Card>
                ))
              )}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-6 bg-(--panel)/70 p-6 border-(--line) space-y-6 shadow-xl">
                <h3 className="text-xl font-bold tracking-tight">Resumen de pedido</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-(--muted)">
                    <span>Subtotal</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-(--muted)">
                    <span>Envío</span>
                    <span className="text-green-500 font-medium">Gratis</span>
                  </div>
                  
                  <div className="flex justify-between font-bold text-2xl pt-4 border-t border-(--line)">
                    <span>Total</span>
                    <span className="text-(--btn-color)">${getTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="grid gap-3 pt-2">
                  <Button 
                    id="cart-checkout"
                    variant="primary" 
                    className="w-full py-4 shadow-lg shadow-(--btn-color)/20" 
                    disabled={cart.length === 0} 
                    onClick={() => navigate('/checkout')}
                  >
                    Finalizar Compra
                  </Button>

                  <button 
                    id="cart-clear"
                    onClick={clearCart}
                    disabled={cart.length === 0}
                    className="text-sm text-(--muted) hover:text-red-400 transition-colors disabled:opacity-50"
                  >
                    Vaciar todo el carrito
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cart;
