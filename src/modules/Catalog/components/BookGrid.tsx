import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import type { Book } from '../../../types/Book.interface';

interface BookGridProps {
  books: Book[];
  totalCount: number;
  isLoadingMore: boolean;
}

const BookGrid = ({ books, totalCount, isLoadingMore }: BookGridProps) => {
  const navigate = useNavigate();

  const remainingCount = Math.max(totalCount - books.length, 0);
  const skeletonCount = isLoadingMore ? Math.min(4, remainingCount) : 0;
  const formatPrice = (value: number) => value.toLocaleString('es-CO');

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {books.map(book => (
        <article
          key={book.id}
          className="group flex h-full flex-col rounded-2xl border border-(--line) bg-(--panel) p-4 shadow-[0_12px_36px_rgba(var(--shadow-color),0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(var(--shadow-color),0.12)]"
        >
          <div
            onClick={() => navigate(`/book/${book.id}`)}
            className="relative aspect-3/4 overflow-hidden rounded-xl bg-(--surface-strong)"
          >
            <img
              src={book.imagesUrls[0]}
              alt={book.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-3 right-3 rounded-full bg-(--panel)/90 px-3 py-1 text-xs font-bold text-(--txt-color)">
              ${formatPrice(book.finalPrice)}
            </div>
          </div>
          <div className="mt-4 flex flex-1 flex-col gap-2">
            <h3 className="line-clamp-2 text-base font-bold text-(--txt-color)">{book.title}</h3>
            <p className="text-sm text-(--txt-secondary)">
              {book.authors[0] ?? 'Autor desconocido'}
            </p>
            <p className="text-xs tracking-[0.2em] text-(--muted) uppercase">
              {book.category[0] ?? 'GENERAL'}
            </p>
            <div className="mt-auto flex flex-col gap-2">
              <Button className="w-full rounded-full py-2 text-xs font-bold">
                ANADIR AL CARRITO
              </Button>
            </div>
          </div>
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
