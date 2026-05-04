import { useEffect, useMemo, useRef, useState } from 'react';
import { books } from '../../../services/books-data';
import type { Book } from '../../../types/Book.interface';
import Button from '../../../components/ui/Button';
import BookGrid from '../components/BookGrid';
import CatalogFilters from '../components/CatalogFilters';
import { useGlobalStore } from '../../../state/zustand/global.store';

const PAGE_SIZE = 20;

const Catalog = () => {
  const query = useGlobalStore(state => state.searchTerm);

  const priceCeiling = useMemo(() => Math.max(...books.map(book => book.finalPrice)), []);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(priceCeiling);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadTimeoutRef = useRef<number | null>(null);

  const categories = useMemo(() => Array.from(new Set(books.flatMap(book => book.category))), []);

  const filteredBooks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matchesCategory = (book: Book) =>
      selectedCategories.length === 0 ||
      book.category.some(category => selectedCategories.includes(category));
    const matchesPrice = (book: Book) => book.finalPrice <= maxPrice;

    const matchesQuery = (book: Book) => {
      if (!normalizedQuery) {
        return true;
      }

      return (
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.authors.some(author => author.toLowerCase().includes(normalizedQuery)) ||
        book.category.some(category => category.toLowerCase().includes(normalizedQuery))
      );
    };

    const result = books.filter(
      book => matchesCategory(book) && matchesQuery(book) && matchesPrice(book),
    );

    if (sortBy === 'price-asc') {
      return [...result].sort((a, b) => a.finalPrice - b.finalPrice);
    }

    if (sortBy === 'price-desc') {
      return [...result].sort((a, b) => b.finalPrice - a.finalPrice);
    }

    if (sortBy === 'title') {
      return [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [query, selectedCategories, sortBy, maxPrice]);

  const visibleBooks = useMemo(
    () => filteredBooks.slice(0, visibleCount),
    [filteredBooks, visibleCount],
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(PAGE_SIZE);
    setIsLoadingMore(false);
    if (loadTimeoutRef.current !== null) {
      window.clearTimeout(loadTimeoutRef.current);
      loadTimeoutRef.current = null;
    }
  }, [query, selectedCategories, sortBy, maxPrice]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const element = sentinelRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (!entries[0]?.isIntersecting) {
          return;
        }

        if (isLoadingMore || visibleCount >= filteredBooks.length) {
          return;
        }

        setIsLoadingMore(true);
        loadTimeoutRef.current = window.setTimeout(() => {
          setVisibleCount(currentCount => Math.min(currentCount + PAGE_SIZE, filteredBooks.length));
          setIsLoadingMore(false);
        }, 350);
      },
      { rootMargin: '200px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [filteredBooks.length, isLoadingMore, visibleCount]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(current =>
      current.includes(category)
        ? current.filter(item => item !== category)
        : [...current, category],
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 lg:gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-black tracking-wide text-(--txt-color) sm:text-3xl">
          CATALOGO DE LIBROS
        </h1>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs text-(--muted) sm:text-sm">
            <span className="tracking-[0.2em] uppercase">Mostrando</span>
            <span className="font-semibold text-(--txt-color)">{visibleBooks.length}</span>
            <span>de</span>
            <span className="font-semibold text-(--txt-color)">{filteredBooks.length}</span>
            <div className="ml-auto flex items-center gap-2 text-(--txt-secondary)">
              <span className="tracking-[0.2em] uppercase">Orden</span>
              <select
                value={sortBy}
                onChange={event => setSortBy(event.target.value)}
                className="rounded-full border border-(--line) bg-(--panel) px-3 py-2 text-xs font-semibold text-(--txt-color) sm:text-sm"
              >
                <option value="default">Mas visto</option>
                <option value="price-asc">Precio: menor a mayor</option>
                <option value="price-desc">Precio: mayor a menor</option>
                <option value="title">Titulo</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
        <CatalogFilters
          categories={categories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
          priceCeiling={priceCeiling}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
        />

        <section className="flex flex-col gap-6">
          {filteredBooks.length === 0 ? (
            <div className="rounded-3xl border border-(--line) bg-(--panel) p-8 text-center">
              <p className="text-lg font-semibold text-(--txt-color)">
                No encontramos resultados para tu busqueda.
              </p>
              <p className="mt-2 text-sm text-(--txt-secondary)">
                Prueba con otro titulo, autor o categoria.
              </p>
            </div>
          ) : (
            <BookGrid
              books={visibleBooks}
              totalCount={filteredBooks.length}
              isLoadingMore={isLoadingMore}
            />
          )}

          <div ref={sentinelRef} className="h-6" />
        </section>
      </div>

      {showBackToTop && (
        <Button
          variant="primary"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed right-6 bottom-6 rounded-full px-4 py-3 text-xs font-bold"
        >
          Ir arriba
        </Button>
      )}
    </div>
  );
};

export default Catalog;
