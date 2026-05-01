import { useState, type MouseEvent } from 'react';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import InputText from '../../../components/ui/InputText';
import PaymentResume from '../components/PaymentResume';
import { useNavigate } from 'react-router-dom';

type PaymentMethod = 'card' | 'wallet';

const orderItems = [
  {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez',
    price: 99,
    quantity: 1,
    accent: 'from-amber-100 to-amber-200',
  },
  {
    title: 'Aprende Python',
    author: 'Xavier Reyes O.',
    price: 128,
    quantity: 1,
    accent: 'from-sky-100 to-sky-200',
  },
];

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      navigate('/payment/confirmed');
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      navigate('/payment/error');
    }
  };

  const sectionTitleClass = 'text-2xl font-black tracking-[-0.04em] text-(--txt-color) sm:text-3xl';
  const helperClass = 'text-sm uppercase tracking-[0.22em] text-(--muted)';

  return (
    <main>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.85fr)]">
        <Card className="bg-(--panel)/90 p-5 sm:p-6 lg:p-8">
          <div className="space-y-2">
            <p className={helperClass}>Proceso de pago seguro</p>
            <h1 className={sectionTitleClass}>Finalizar compra</h1>
            <p className="max-w-2xl text-base leading-7 text-(--txt-secondary)">
              Completa tus datos de envío y elige el método de pago que prefieras para terminar tu
              pedido.
            </p>
          </div>

          <form className="mt-8 space-y-8">
            <section className="space-y-5">
              <div>
                <p className={helperClass}>Datos de envío</p>
                <h2 className="mt-2 text-xl font-black tracking-[-0.03em] text-(--txt-color)">
                  Información de entrega
                </h2>
              </div>

              <div className="grid gap-4">
                <InputText
                  id="fullName"
                  value={fullName}
                  onChange={setFullName}
                  placeholder="Ej. Julián Barnes"
                  label="Nombre completo"
                  required
                />

                <InputText
                  id="address"
                  value={address}
                  onChange={setAddress}
                  placeholder="Calle, número, carrera, piso"
                  label="Dirección de entrega"
                  required
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <InputText
                    id="city"
                    value={city}
                    onChange={setCity}
                    placeholder="Ciudad"
                    label="Ciudad"
                    required
                  />

                  <InputText
                    id="postalCode"
                    value={postalCode}
                    onChange={setPostalCode}
                    placeholder="Código postal"
                    label="Código postal"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <div>
                <p className={helperClass}>Métodos de pago</p>
                <h2 className="mt-2 text-xl font-black tracking-[-0.03em] text-(--txt-color)">
                  Selecciona cómo quieres pagar
                </h2>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`flex w-full items-center justify-between rounded-3xl border px-4 py-4 text-left transition ${paymentMethod === 'card' ? 'border-(--btn-color) bg-(--panel) shadow-[0_16px_40px_rgba(var(--shadow-color),0.08)]' : 'border-(--line) bg-(--bg-color)/40 hover:bg-(--panel)'}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full border ${paymentMethod === 'card' ? 'border-(--btn-color)' : 'border-(--line)'}`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${paymentMethod === 'card' ? 'bg-(--btn-color)' : 'bg-transparent'}`}
                      />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-(--txt-color)">
                        Tarjeta de crédito / débito
                      </p>
                      <p className="text-xs text-(--txt-secondary)">
                        Visa, Mastercard, American Express
                      </p>
                    </div>
                  </div>
                  <span className="text-lg text-(--muted)">▭</span>
                </button>

                {paymentMethod === 'card' && (
                  <div className="rounded-[26px] border border-(--line) bg-(--bg-color)/50 p-4 sm:p-5">
                    <div className="grid gap-4">
                      <InputText
                        id="cardNumber"
                        value={cardNumber}
                        onChange={setCardNumber}
                        placeholder="#### #### #### ####"
                        label="Número de tarjeta"
                        required
                      />

                      <div className="grid gap-4 sm:grid-cols-2">
                        <InputText
                          id="expiry"
                          value={expiry}
                          onChange={setExpiry}
                          placeholder="mm/aa"
                          label="Fecha de expiración"
                          required
                        />

                        <InputText
                          id="cvc"
                          value={cvc}
                          onChange={setCvc}
                          placeholder="CVC"
                          label="CVC"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setPaymentMethod('wallet')}
                  className={`flex w-full items-center justify-between rounded-3xl border px-4 py-4 text-left transition ${paymentMethod === 'wallet' ? 'border-(--btn-color) bg-(--panel) shadow-[0_16px_40px_rgba(var(--shadow-color),0.08)]' : 'border-(--line) bg-(--bg-color)/40 hover:bg-(--panel)'}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full border ${paymentMethod === 'wallet' ? 'border-(--btn-color)' : 'border-(--line)'}`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${paymentMethod === 'wallet' ? 'bg-(--btn-color)' : 'bg-transparent'}`}
                      />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-(--txt-color)">Wallet</p>
                      <p className="text-xs text-(--txt-secondary)">Apple Pay, Google Pay</p>
                    </div>
                  </div>
                  <span className="text-lg text-(--muted)">▭</span>
                </button>
              </div>
            </section>
          </form>
        </Card>

        <div className="flex flex-col gap-6">
          <PaymentResume items={orderItems} shipping={13} taxes={5} />
          <Card className="bg-(--panel)/90 p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button variant="outlined" className="w-full sm:w-auto">
                Volver al carrito
              </Button>

              <Button onClick={handleSubmit} variant="primary" className="w-full sm:w-auto">
                Confirmar pago
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
