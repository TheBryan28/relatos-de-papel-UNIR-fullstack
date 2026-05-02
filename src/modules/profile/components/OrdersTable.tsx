import type { Order } from '../../../types/Order.interface';
type Props = {
      orders: Order[];
    };

const OrdersTable = ({ orders }:Props) => {
  return (

<div className="rounded-[14px] border border-(--line) bg-(--panel) p-5">
  <h2 className="text-xl font-bold mb-3">HISTORIAL DE PEDIDOS</h2>

  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="text-left text-(--txt-secondary)">
        <th className="pb-3 px-2">ID</th>
        <th className="px-2">FECHA</th>
        <th className="px-2">ESTADO</th>
        <th className="px-2">TOTAL</th>
        <th className="px-2 text-center">ACCIÓN</th>
      </tr>
    </thead>

    <tbody>
      {orders.map(order => (
        <tr
          key={order.id}
          className="border-t border-(--line) hover:bg-(--bg-color)/50 transition"
        >
          <td className="py-3 px-2">{order.id}</td>

          <td className="px-2">{order.date}</td>

          <td className="px-2">
            <span className="rounded bg-(--bg-color) px-2 py-1 text-xs">
              {order.status}
            </span>
          </td>

          <td className="px-2 font-medium">{order.total} {order.currency}</td>

          <td className="px-2 text-center">
            <button className="text-xs font-medium text-(--txt-color) hover:underline">
              {order.action || 'Ver detalle'}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    );
};

export default OrdersTable;