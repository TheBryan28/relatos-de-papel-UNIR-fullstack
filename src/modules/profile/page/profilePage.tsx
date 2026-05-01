import { users } from '../../../services/mocks';

const ProfilePage = () => {
  const user = users[0];

  const books = [
    { id: 1, title: 'Libro 1', author: 'Autor 1' },
    { id: 2, title: 'Libro 2', author: 'Autor 2' },
    { id: 3, title: 'Libro 3', author: 'Autor 3' },
  ];

  const orders = [
    {
      id: '#RP001',
      date: '2024-01-10',
      status: 'Entregado',
      total: '45€',
      accion: 'VER DETALLES'
    },
  ];

  return (
    <div className="grid grid-cols-[260px_1fr] gap-6">

      {/* SIDEBAR */}
      <aside className="flex flex-col gap-4 rounded-[14px] border border-(--line) bg-(--panel) p-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-(--bg-color)" />
          <div>
            <p className="font-bold text-(--txt-color)">{user.name}</p>
            <p className="text-sm text-(--txt-secondary)">Premium Member</p>
          </div>
        </div>

        <nav className="mt-4 flex flex-col gap-2">
          <button className="text-left p-2 rounded hover:bg-(--bg-color) font-medium">
            Library
        </button>
          <button className="text-left p-2 rounded hover:bg-(--bg-color)">
            Orders
          </button>
          <button className="text-left p-2 rounded hover:bg-(--bg-color)">
            Addresses
          </button>
          <button className="text-left p-2 rounded hover:bg-(--bg-color)">
            Settings
          </button>
        </nav>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex flex-col gap-6">

        <div className="grid grid-cols-2 gap-6 rounded-[14px] border border-(--line) bg-(--panel) p-6">

  <div className="flex flex-col gap-3">
    <div>
      <p className="text-xs text-(--txt-secondary)">NOMBRE COMPLETO</p>
      <p className="text-lg font-semibold">{user.name}</p>
    </div>

    <div>
      <p className="text-xs text-(--txt-secondary)">CORREO ELÉCTRONICO</p>
      <p>{user.email}</p>
    </div>

    <div>
      <p className="text-xs text-(--txt-secondary)">TIPO DE CUENTA</p>
      <span className="inline-block rounded-full bg-(--bg-color) px-3 py-1 text-xs">
        PREMIUM MEMBER
      </span>
    </div>
  </div>

  <div className="flex flex-col justify-between rounded-[10px] bg-(--bg-color) p-4">
    <p className="font-semibold">DIRECCIONES DE ENVIO</p>
    <p className="font-semibold">Añadir Nueva</p>
    <p className="text-sm text-(--txt-secondary)">
      Calle falsa 123
    </p>
    <button className="mt-3 text-sm font-medium text-(--txt-color)">
      Editar dirección
    </button>
  </div>

</div>

        {/* BIBLIOTECA */}
        <div>
          <h2 className="text-xl font-bold mb-3">BIBLIOTECA DIGITAL</h2>

          <div className="grid grid-cols-3 gap-6">
            {books.map(book => (
              <div
                key={book.id}
                className="rounded-[14px] border border-(--line) bg-(--panel) p-4"
              >
                <div className="h-40 bg-(--bg-color) mb-3 rounded" />

                <p className="font-semibold">{book.title}</p>
                <p className="text-sm text-(--txt-secondary)">
                  {book.author}
                </p>

                <button className="mt-3 w-full rounded bg-black text-white py-2">
                  LEER ONLINE
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* HISTORIAL */}
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

      </main>
    </div>
  );
};

export default ProfilePage;
























// import React from "react";


// //rutas
// import { users } from '../../../services/mocks';
// import {books} from '../../../fakedata/books-data';
// import {orders} from '../../../services/mocksOrders';


// import "./ProfilePage.css";


// const ProfilePage = () => {
//   //  tomamos un usuario mock
//   const user = users[0];
    
//   return (
//     <div className="profile-container">
//       <h1>INFORMACIÓN DE PERFIL</h1>

//       {/* INFO USUARIO */}
//       <section className="profile-info">
//         <div>
//           <p><strong>Nombre:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Tipo:</strong> Premium Member</p>
//         </div>

//         <div className="address-box">
//           <h3>Direcciones</h3>
//           <p>Calle falsa 123</p>
//         </div>
//       </section>

//       {/* BIBLIOTECA */}
//       <section className="library">
//         <h2>Biblioteca digital</h2>
//         <div className="books-grid">
//           {books.slice(0, 3).map((book) => (
//             <div key={book.id} className="book-card">
//               <img src={book.image} alt={book.title} />
//               <h4>{book.title}</h4>
//               <p>{book.author}</p>
//               <button>Leer online</button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* HISTORIAL */}
//       <section className="orders">
//         <h2>Historial de pedidos</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Fecha</th>
//               <th>Estado</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.slice(0, 3).map((order) => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.date}</td>
//                 <td>{order.status}</td>
//                 <td>{order.total}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>
//     </div>
//   );
// };


// export default ProfilePage;