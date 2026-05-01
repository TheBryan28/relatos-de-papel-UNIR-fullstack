const OrdersTable = ({ orders }) => {
  return (

<div>
    <h2 className="text-xl font-bold mb-3">HISTORIAL DE PEDIDOS</h2>
    <table className="w-full text-sm">
        <thead>
        <tr className="text-(--txt-secondary)">
            <th className="pb-2">ID</th>
            <th>FECHA</th>
            <th>ESTADO</th>
            <th>TOTAL</th>
            <th>ACCIÓN</th>
        </tr>
        </thead>

        <tbody>
        {orders.map(order => (
            <tr key={order.id} className="border-t border-(--line)">
            <td className="py-3">{order.id}</td>
            <td>{order.date}</td>
            <td>
                <span className="rounded bg-(--bg-color) px-2 py-1 text-xs">
                {order.status}
                </span>
            </td>
            <td>{order.total}</td>
            <td>{order.accion}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
    );
};

export default OrdersTable;