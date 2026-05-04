import { Link } from 'react-router-dom';
import { FiArrowRight, FiBook, FiShield, FiTruck } from 'react-icons/fi';
import { books } from '../../../services/books-data';

const LandingPage = () => {
  const featuredBooks = books.slice(0, 4);
  const formatPrice = (value: number) => value.toLocaleString('es-CO');

  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-4xl bg-linear-to-br from-(--panel) to-(--surface-strong) p-8 md:p-16">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-(--btn-color) opacity-5 blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex max-w-2xl flex-col gap-6 text-center md:text-left">
            <span className="inline-block self-center rounded-full bg-(--btn-color)/10 px-4 py-1 text-sm font-bold tracking-wide text-(--btn-color) md:self-start">
              BIENVENIDO A RELATOS DE PAPEL
            </span>
            <h1 className="text-4xl leading-tight font-black text-(--txt-color) md:text-6xl">
              Descubre historias que <span className="text-(--btn-color)">cobran vida</span>
            </h1>
            <p className="text-lg text-(--txt-secondary) md:text-xl">
              Tu portal universitario favorito para encontrar los mejores libros, desde clásicos
              literarios hasta las últimas novedades académicas.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/auth/login"
                className="flex items-center gap-2 rounded-xl bg-(--btn-color) px-8 py-4 font-bold text-(--btn-text) transition-all hover:scale-105 hover:bg-(--btn-hover) active:scale-95"
              >
                Comenzar a leer <FiArrowRight />
              </Link>
              <Link
                to="/catalog"
                className="rounded-xl border border-(--line) bg-(--panel) px-8 py-4 font-bold text-(--txt-color) transition-all hover:bg-(--surface-strong)"
              >
                Ver catálogo
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative h-80 w-80 rotate-3 transition-transform hover:rotate-0">
              <div className="absolute inset-0 rounded-2xl bg-(--btn-color) opacity-10 shadow-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop"
                alt="Libro destacado"
                className="h-full w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            icon: <FiTruck />,
            title: 'Envío Rápido',
            desc: 'Entrega en el campus en menos de 24 horas.',
          },
          {
            icon: <FiShield />,
            title: 'Pago Seguro',
            desc: 'Transacciones protegidas con encriptación bancaria.',
          },
          {
            icon: <FiBook />,
            title: 'Vasta Colección',
            desc: 'Más de 10,000 títulos disponibles para ti.',
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-2xl border border-(--line) bg-(--panel) p-8 transition-all hover:border-(--btn-color)/30 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-(--btn-color) text-xl text-(--btn-text)">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-(--txt-color)">{feature.title}</h3>
            <p className="text-(--txt-secondary)">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Recommended Section */}
      <section className="flex flex-col gap-8">
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-black text-(--txt-color)">Recomendados para ti</h2>
            <p className="text-(--txt-secondary)">Nuestra selección especial de esta semana</p>
          </div>
          <Link to="#" className="font-bold text-(--btn-color) underline-offset-4 hover:underline">
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBooks.map(book => (
            <div
              key={book.id}
              className="group flex flex-col gap-4 rounded-2xl border border-(--line) bg-(--panel) p-4 transition-all hover:shadow-xl"
            >
              <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-(--surface-strong)">
                <img
                  src={book.imagesUrls[0]}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 rounded-lg bg-(--panel)/80 px-2 py-1 text-sm font-bold text-(--txt-color) backdrop-blur-sm">
                  ${formatPrice(book.finalPrice)}
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="line-clamp-1 w-full font-bold text-(--txt-color)">{book.title}</h4>
                <p className="text-sm text-(--txt-secondary)">
                  {book.authors[0] ?? 'Autor desconocido'}
                </p>
              </div>
              <button className="mt-2 w-full rounded-xl bg-(--btn-color) py-2 text-sm font-bold text-(--btn-text) transition-opacity hover:opacity-90">
                Agregar al Carrito
              </button>
              <Link
                to={`/book/${book.id}`}
                className="mt-2 w-full rounded-xl bg-(--btn-color) py-2 text-center text-sm font-bold text-(--btn-text) transition-opacity hover:opacity-90"
              >
                Ver Libro
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-(--btn-color) p-12 text-center text-(--btn-text)">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <h2 className="text-3xl font-black md:text-4xl">
            ¿Listo para empezar tu próxima aventura literaria?
          </h2>
          <p className="text-lg opacity-80">
            Únete a nuestra comunidad universitaria y accede a descuentos exclusivos.
          </p>
          <div className="mt-4">
            <Link
              to="/auth/register"
              className="inline-block rounded-xl bg-(--btn-text) px-10 py-4 font-bold text-(--btn-color) transition-transform hover:scale-105 active:scale-95"
            >
              Regístrate ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
