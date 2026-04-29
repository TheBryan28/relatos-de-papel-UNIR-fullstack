import { useCart } from '../../../contexts/Cart.Context'
import Button from '../../../components/ui/Button'
import Card from '../../../components/ui/Card'

const Cart = () => {
  const { cart, getTotal, removeFromCart, addToCart, clearCart } = useCart()

  return (
    <main className="relative min-h-screen overflow-hidden bg-(--bg-color) px-4 py-6 text-(--txt-color) sm:px-6 lg:px-8">
      {/* Fondo con patrón de puntos (Radial Gradient igual al Login) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--shadow-color),0.08)_1px,transparent_0)] bg-size-[18px_18px] opacity-40" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col gap-6 rounded-[36px] border border-(--line) bg-(--panel)/80 p-4 shadow-[0_32px_90px_rgba(var(--shadow-color),0.08)] backdrop-blur-sm md:p-6">
        
        <section className="flex flex-col gap-6">
          <div className="space-y-3 px-2">
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-(--txt-color) sm:text-4xl">
              Tu Carrito
            </h2>
            <p className="text-base leading-7 text-(--muted)">
              {cart.length > 0 
                ? `Tienes ${cart.length} productos listos para procesar.` 
                : "Tu carrito está vacío. ¡Agrega algunos productos!"}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Lista de Productos */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.id} className="bg-(--panel)/70 p-4 flex items-center justify-between border-(--line)">
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-(--muted)">Precio unitario: ${item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-(--line) rounded-xl bg-(--input-bg)">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="px-3 py-1 hover:text-(--btn-color) transition-colors"
                      >
                        -
                      </button>
                      <span className="px-2 font-medium min-w-[2ch] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => addToCart(item)}
                        className="px-3 py-1 hover:text-(--btn-color) transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-(--txt-color) min-w-[80px] text-right">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Resumen de Compra */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6 bg-(--panel)/70 p-6 border-(--line) space-y-6">
                <h3 className="text-xl font-bold">Resumen</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-(--muted)">
                    <span>Subtotal</span>
                    <span>${getTotal()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl pt-4 border-t border-(--line)">
                    <span>Total</span>
                    <span className="text-(--btn-color)">${getTotal()}</span>
                  </div>
                </div>

                <div className="grid gap-3">
                  <Button variant="primary" className="w-full" disabled={cart.length === 0}>
                    Finalizar Compra
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full border-(--line)" 
                    onClick={clearCart}
                    disabled={cart.length === 0}
                  >
                    Vaciar Carrito
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Cart

