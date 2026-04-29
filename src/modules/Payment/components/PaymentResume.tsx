type ResumeItem = {
  title: string;
  author: string;
  price: number;
  quantity: number;
  accent: string;
};

interface PaymentResumeProps {
  items: ResumeItem[];
  shipping: number;
  taxes: number;
}

const currencyFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'USD',
});

const PaymentResume = ({ items, shipping, taxes }: PaymentResumeProps) => {
  const subtotal = items.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
  const total = subtotal + shipping + taxes;

  return (
    <aside className="rounded-[28px] border border-(--line) bg-(--panel)/95 p-5 shadow-[0_24px_60px_rgba(var(--shadow-color),0.08)] lg:sticky lg:top-6">
      <div className="space-y-5">
        <div>
          <p className="text-xs tracking-[0.24em] text-(--muted) uppercase">Resumen de compra</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-(--txt-color)">
            Tu pedido
          </h3>
        </div>

        <div className="space-y-4 rounded-3xl bg-(--bg-color)/70 p-4">
          {items.map(item => (
            <div key={`${item.title}-${item.author}`} className="flex items-start gap-3">
              <div
                className={`flex h-16 w-12 shrink-0 items-end justify-center rounded-xl border border-(--line) bg-linear-to-br ${item.accent} p-1 text-[0.65rem] font-black tracking-[0.2em] text-(--txt-color) uppercase shadow-sm`}
              >
                Libro
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-(--txt-color)">{item.title}</p>
                <p className="truncate text-xs text-(--txt-secondary)">{item.author}</p>
                <p className="mt-1 text-sm text-(--txt-color)">
                  {currencyFormatter.format(item.price)}
                </p>
              </div>

              <div className="rounded-full bg-(--panel) px-2.5 py-1 text-xs font-bold text-(--txt-secondary)">
                {item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-(--line) pt-4 text-sm text-(--txt-secondary)">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span className="font-medium text-(--txt-color)">
              {currencyFormatter.format(subtotal)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Envío</span>
            <span className="font-medium text-(--txt-color)">
              {currencyFormatter.format(shipping)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Impuestos</span>
            <span className="font-medium text-(--txt-color)">
              {currencyFormatter.format(taxes)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-(--line) pt-3 text-base font-black text-(--txt-color)">
            <span>Total</span>
            <span>{currencyFormatter.format(total)}</span>
          </div>
        </div>

        <div className="rounded-[22px] border border-dashed border-(--line) bg-(--surface-strong)/45 px-4 py-3 text-xs tracking-[0.18em] text-(--muted) uppercase">
          Compra protegida por cifrado SSL de 256 bits
        </div>
      </div>
    </aside>
  );
};

export default PaymentResume;
