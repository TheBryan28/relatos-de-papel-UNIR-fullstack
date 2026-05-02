import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiCreditCardOff } from 'react-icons/ci';
import { PiWarningCircleLight } from 'react-icons/pi';
import Button from '../../../components/ui/Button';

const PaymentError: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-[70vh] px-6 py-12 md:px-12" style={{ color: 'var(--txt-color)' }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 lg:grid-cols-2">
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
            <CiCreditCardOff className="h-40 w-40" style={{ color: 'var(--btn-color)' }} />
          </div>
        </aside>
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div
              className="rounded-full p-2"
              style={{ backgroundColor: 'var(--error-text)', color: 'var(--btn-text)' }}
            >
              <PiWarningCircleLight className="h-5 w-5" />
            </div>
            <p
              className="text-xs font-semibold uppercase"
              style={{ color: 'var(--txt-secondary)' }}
            >
              Transacción interrumpida
            </p>
          </div>

          <h1 className="mb-2 text-4xl font-bold">Pago fallido</h1>
          <p className="mb-6 text-sm" style={{ color: 'var(--txt-secondary)' }}>
            Tu transacción por 'Relatos de Papel' no pudo procesarse debido a algun error. Intente
            más tarde o contacte a soporte.
          </p>

          <div
            className="mb-6 rounded p-6"
            style={{
              backgroundColor: 'var(--panel)',
              boxShadow: `0 2px 6px rgba(var(--shadow-color), 0.06)`,
            }}
          >
            <div className="mb-4 flex items-start justify-between">
              <strong className="text-sm" style={{ color: 'var(--txt-secondary)' }}>
                Detalles
              </strong>
              <strong className="text-sm">Código de error: 402</strong>
            </div>

            <blockquote className="text-sm" style={{ color: 'var(--txt-secondary)' }}>
              "Un libro debe ser el hacha para el mar helado dentro de nosotros." — Franz Kafka
            </blockquote>
          </div>

          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={() => navigate('/checkout')}
              className="w-full rounded-md px-6 py-3 sm:w-auto"
              style={{ backgroundColor: 'var(--btn-color)', color: 'var(--btn-text)' }}
            >
              Elegir otro método de pago
            </Button>

            <Button
              onClick={() => navigate('/cart')}
              className="w-full rounded-md border px-6 py-3 sm:w-auto"
              style={{
                borderColor: 'var(--line)',
                backgroundColor: 'transparent',
                color: 'var(--txt-color)',
              }}
            >
              Ir a carrito
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PaymentError;
