import { useNavigate } from 'react-router-dom';
import type { Book } from '../../../types/Book.interface';
import { useCart } from '../../../state/contexts/Cart.Context';

interface BookGridProps {
  books: Book[];
  totalCount: number;
  isLoadingMore: boolean;
}

const BookGrid = ({ books, totalCount, isLoadingMore }: BookGridProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const remainingCount = Math.max(totalCount - books.length, 0);
  const skeletonCount = isLoadingMore ? Math.min(4, remainingCount) : 0;
  const formatPrice = (value: number) => value.toLocaleString('es-CO');

  const handleAddToCart = (book: Book) => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.finalPrice,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {books.map(book => (
        <article
          key={book.id}
          className="group flex h-full flex-col gap-4 rounded-3xl border border-(--line) bg-(--panel) p-4 transition-all hover:border-(--btn-color)/30 hover:shadow-2xl hover:shadow-(--shadow-color)/10"
        >
          <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-(--surface-strong)">
            <img
              src={book.imagesUrls[0]}
              alt={book.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-3 left-3 rounded-lg bg-(--panel)/90 px-2 py-1 text-[10px] font-black tracking-widest text-(--txt-color) uppercase backdrop-blur-sm">
              {book.stock > 0 ? 'En Stock' : 'Agotado'}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
               <button
                onClick={() => navigate(`/book/${book.id}`)}
                className="rounded-xl bg-white px-6 py-3 font-bold text-black transition-transform hover:scale-105 active:scale-95 cursor-pointer"
               >
                 Ver Detalle
               </button>
            </div>
          </div>
          
          <div className="flex flex-col gap-1 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h4 className="line-clamp-2 font-black text-(--txt-color) group-hover:text-(--btn-color) transition-colors">
                {book.title}
              </h4>
              <span className="shrink-0 font-bold text-(--txt-color)">${formatPrice(book.finalPrice)}</span>
            </div>
            <p className="text-sm text-(--txt-secondary)">{book.authors[0] ?? 'Autor desconocido'}</p>
            <p className="text-xs tracking-[0.2em] text-(--muted) uppercase mt-1">
              {book.category[0] ?? 'GENERAL'}
            </p>
          </div>

          <button 
            disabled={book.stock === 0}
            onClick={() => handleAddToCart(book)}
            className={`mt-auto w-full rounded-xl py-3 text-sm font-black transition-all cursor-pointer ${
              book.stock > 0 
                ? 'bg-(--btn-color) text-(--btn-text) hover:bg-(--btn-hover) active:scale-95' 
                : 'bg-(--surface-strong) text-(--txt-secondary) cursor-not-allowed'
            }`}
          >
            {book.stock > 0 ? 'AÑADIR AL CARRITO' : 'NOTIFICAR DISPONIBILIDAD'}
          </button>
        </article>
      ))}
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="flex h-full flex-col gap-4 rounded-2xl border border-(--line) bg-(--panel) p-4 shadow-[0_12px_36px_rgba(var(--shadow-color),0.08)]"
        >
          <div className="aspect-3/4 w-full animate-pulse rounded-xl bg-(--surface-strong)" />
          <div className="h-4 w-3/4 animate-pulse rounded-full bg-(--surface-strong)" />
          <div className="h-3 w-1/2 animate-pulse rounded-full bg-(--surface-strong)" />
          <div className="mt-auto h-8 w-full animate-pulse rounded-full bg-(--surface-strong)" />
        </div>
      ))}
    </div>
  );
};

export default BookGrid;
