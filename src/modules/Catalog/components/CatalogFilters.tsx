import { useState, type ChangeEvent } from 'react';
import UseMaxMediaQuery from '../../../hooks/useIsMobile';

interface CatalogFiltersProps {
  categories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
  priceCeiling: number;
  maxPrice: number;
  onMaxPriceChange: (value: number) => void;
}

const CatalogFilters = ({
  categories,
  selectedCategories,
  onToggleCategory,
  priceCeiling,
  maxPrice,
  onMaxPriceChange,
}: CatalogFiltersProps) => {
  const [open, setOpen] = useState(false);
  const isMobile = UseMaxMediaQuery(1024);
  const formattedMaxPrice = maxPrice.toLocaleString('es-CO');

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    onMaxPriceChange(Number(event.target.value));
  };

  return (
    <div>
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-2xl border border-(--line) bg-(--panel) px-4 py-2 text-sm font-bold text-(--txt-secondary) uppercase"
        >
          {open ? 'Cerrar filtros' : 'Filtrar libros'}
        </button>
      )}
      <aside
        className={`${open ? 'block' : 'hidden'} h-fit rounded-2xl border border-(--line) bg-(--panel) p-5 shadow-[0_16px_40px_rgba(var(--shadow-color),0.08)] lg:sticky lg:top-6 lg:block`}
      >
        <div className="flex items-center gap-2 text-sm font-bold text-(--txt-secondary) uppercase">
          <span>Filtrar libros</span>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-(--muted) uppercase">
              Categorias
            </p>
            <div className="mt-3 flex flex-col gap-3">
              {categories.map(category => (
                <label
                  key={category}
                  className="flex items-center justify-between rounded-xl border border-(--line) bg-(--surface-strong) px-3 py-2 text-sm text-(--txt-color)"
                >
                  <span>{category}</span>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => onToggleCategory(category)}
                    className="h-4 w-4 accent-(--btn-color)"
                  />
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-(--muted) uppercase">
              Rango de precio
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-(--txt-secondary)">
              <span>$0</span>
              <input
                type="range"
                min={0}
                max={priceCeiling}
                step={500}
                value={maxPrice}
                onChange={handlePriceChange}
                className="w-full accent-(--btn-color)"
              />
              <span>${priceCeiling.toLocaleString('es-CO')}</span>
            </div>
            <p className="mt-2 text-xs text-(--muted)">Hasta ${formattedMaxPrice}</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default CatalogFilters;
