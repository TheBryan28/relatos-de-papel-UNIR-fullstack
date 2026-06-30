import { useEffect, useMemo, useRef, useState } from 'react';
import Button from '../../../components/ui/Button';
import BookGrid from '../components/BookGrid';
import CatalogFilters from '../components/CatalogFilters';
import { useGlobalStore } from '../../../state/zustand/global.store';
import useGetCatalog from '../../../hooks/useGetCatalog';

const PAGE_SIZE = 20;

const Catalog = () => {
  const query = useGlobalStore(state => state.searchTerm);
  const [page, setPage] = useState(0);
  const { books: fetchedBooks, fetchSupplies, loading, error } = useGetCatalog();

  useEffect(() => {
    fetchSupplies({ page, pageSize: PAGE_SIZE, title: query });
  }, [fetchSupplies, page, query]);

  const books = useMemo(() => fetchedBooks || [], [fetchedBooks]);

  const priceCeiling = useMemo(() => Math.max(...books.map(book => book.finalPrice)), [books]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(priceCeiling);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadTimeoutRef = useRef<number | null>(null);

  const categories = useMemo(() => Array.from(new Set(books.flatMap(book => book.categories))), [books]);

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

        if (isLoadingMore || visibleCount >= books.length) {
          return;
        }

        setIsLoadingMore(true);
        loadTimeoutRef.current = window.setTimeout(() => {
          setVisibleCount(currentCount => Math.min(currentCount + PAGE_SIZE, books.length));
          console.log(`Cargando más libros... Visible count: ${visibleCount + PAGE_SIZE}`);
          setPage(currentPage => currentPage + 1);
          setIsLoadingMore(false);
        }, 350);
      },
      { rootMargin: '200px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [books.length, isLoadingMore, visibleCount]);

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
            <span className="font-semibold text-(--txt-color)">{books.length}</span>
            <span>de</span>
            <span className="font-semibold text-(--txt-color)">{"TODO:: calcular total"}</span>
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
          {loading && (
            <div className="rounded-3xl border border-(--line) bg-(--panel) p-8 text-center">
              <p className="text-lg font-semibold text-(--txt-color)">Cargando libros...</p>
            </div>
           )}
          {error && (
            <div className="rounded-3xl border border-(--line) bg-(--panel) p-8 text-center">
              <p className="text-lg font-semibold text-(--error-text)">Error al cargar libros.</p>
            </div>
          )}
          {books.length === 0 ? (
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
              books={books}
              totalCount={books.length}
              isLoadingMore={isLoadingMore}
            />
          )}

          <div ref={sentinelRef} className="h-6" />
        </section>
      </div>

      {showBackToTop && (
        <Button
          variant="primary"
          id="back-to-top-button"
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
