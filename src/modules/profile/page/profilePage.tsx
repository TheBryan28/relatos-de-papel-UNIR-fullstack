import React from "react";

// 👇 ajusta rutas según tu proyecto
import { users } from "@/services/mocks";
import books from '../../../fakedata/books-data';
import orders from "@/mocks/orders";

import "./ProfilePage.css";

const ProfilePage = () => {
  // 👇 tomamos un usuario mock
  const user = users[0];

  return (
    <div className="profile-container">
      <h1>INFORMACIÓN DE PERFIL</h1>

      {/* INFO USUARIO */}
      <section className="profile-info">
        <div>
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Tipo:</strong> Premium Member</p>
        </div>

        <div className="address-box">
          <h3>Direcciones</h3>
          <p>Calle falsa 123</p>
        </div>
      </section>

      {/* BIBLIOTECA */}
      <section className="library">
        <h2>Biblioteca digital</h2>
        <div className="books-grid">
          {books.slice(0, 3).map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <button>Leer online</button>
            </div>
          ))}
        </div>
      </section>

      {/* HISTORIAL */}
      <section className="orders">
        <h2>Historial de pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 3).map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProfilePage;