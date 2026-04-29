import { Link } from 'react-router-dom';
import { FiArrowRight, FiBook, FiShield, FiTruck } from 'react-icons/fi';

const LandingPage = () => {
  const featuredBooks = [
    {
      id: 1,
      title: 'El Laberinto de los Sueños',
      author: 'Gabriel García Márquez',
      price: '$25.99',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Cien Años de Soledad',
      author: 'Gabriel García Márquez',
      price: '$19.99',
      image: 'https://images.unsplash.com/photo-1543004218-ee141104638e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Don Quijote de la Mancha',
      author: 'Miguel de Cervantes',
      price: '$15.50',
      image: 'https://images.unsplash.com/photo-1512820790803-73cad7a2593f?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Rayuela',
      author: 'Julio Cortázar',
      price: '$22.00',
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-(--panel) to-(--surface-strong) p-8 md:p-16">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-(--btn-color) opacity-5 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex max-w-2xl flex-col gap-6 text-center md:text-left">
            <span className="inline-block self-center rounded-full bg-(--btn-color)/10 px-4 py-1 text-sm font-bold tracking-wide text-(--btn-color) md:self-start">
              BIENVENIDO A RELATOS DE PAPEL
            </span>
            <h1 className="text-4xl font-black leading-tight text-(--txt-color) md:text-6xl">
              Descubre historias que <span className="text-(--btn-color)">cobran vida</span>
            </h1>
            <p className="text-lg text-(--txt-secondary) md:text-xl">
              Tu portal universitario favorito para encontrar los mejores libros, desde clásicos literarios hasta las últimas novedades académicas.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
              <Link
                to="/auth/login"
                className="flex items-center gap-2 rounded-xl bg-(--btn-color) px-8 py-4 font-bold text-(--btn-text) transition-all hover:scale-105 hover:bg-(--btn-hover) active:scale-95"
              >
                Comenzar a leer <FiArrowRight />
              </Link>
              <button className="rounded-xl border border-(--line) bg-(--panel) px-8 py-4 font-bold text-(--txt-color) transition-all hover:bg-(--surface-strong)">
                Ver catálogo
              </button>
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
          { icon: <FiTruck />, title: 'Envío Rápido', desc: 'Entrega en el campus en menos de 24 horas.' },
          { icon: <FiShield />, title: 'Pago Seguro', desc: 'Transacciones protegidas con encriptación bancaria.' },
          { icon: <FiBook />, title: 'Vasta Colección', desc: 'Más de 10,000 títulos disponibles para ti.' },
        ].map((feature, i) => (
          <div key={i} className="flex flex-col gap-4 rounded-2xl border border-(--line) bg-(--panel) p-8 transition-all hover:border-(--btn-color)/30 hover:shadow-lg">
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
          {featuredBooks.map((book) => (
            <div key={book.id} className="group flex flex-col gap-4 rounded-2xl border border-(--line) bg-(--panel) p-4 transition-all hover:shadow-xl">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-(--surface-strong)">
                <img 
                  src={book.image} 
                  alt={book.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2 rounded-lg bg-(--panel)/80 px-2 py-1 text-sm font-bold text-(--txt-color) backdrop-blur-sm">
                  {book.price}
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-(--txt-color) line-clamp-1">{book.title}</h4>
                <p className="text-sm text-(--txt-secondary)">{book.author}</p>
              </div>
              <button className="mt-2 w-full rounded-xl bg-(--btn-color) py-2 text-sm font-bold text-(--btn-text) transition-opacity hover:opacity-90">
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-(--btn-color) p-12 text-center text-(--btn-text)">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <h2 className="text-3xl font-black md:text-4xl">¿Listo para empezar tu próxima aventura literaria?</h2>
          <p className="text-lg opacity-80">Únete a nuestra comunidad universitaria y accede a descuentos exclusivos.</p>
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
