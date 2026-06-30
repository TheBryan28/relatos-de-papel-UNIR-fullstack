import type { KeyboardEvent } from 'react';
import InputText from './InputText';
import { CiSearch } from 'react-icons/ci';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch?: () => void;
  goBack?: boolean;
}

const SearchInput = ({ searchTerm, setSearchTerm, goBack, handleSearch }: SearchInputProps) => {
  const navigate = useNavigate();

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && handleSearch) {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleGoBack = () => {
    setSearchTerm('');
    navigate(-1);
  };

  return (
    <form className="mb-2 flex w-full">
      {goBack && (
        <button
          type="button"
          onClick={handleGoBack}
          className="text-brand hover:text-brand-hover mt-2 flex cursor-pointer items-center text-sm font-medium"
        >
          <IoArrowBackOutline size={24} />
        </button>
      )}
      <label htmlFor="global-search" className="text-heading sr-only mb-2.5 block text-sm font-medium">
        Buscar
      </label>
      <div className="relative w-full">
        <InputText
          type="search"
          id="global-search"
          value={searchTerm}
          onChange={setSearchTerm}
          onKeyDown={handleEnter}
          className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border p-3 text-sm shadow-xs"
          placeholder="Buscar libros por titulo, autor o género..."
          required
        />
        <div
          onClick={handleSearch}
          className="pointer-events-none absolute inset-y-0 inset-e-0 flex cursor-pointer items-center pe-2 pt-1"
        >
          <CiSearch size={24} />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
