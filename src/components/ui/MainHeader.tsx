import { Link, useNavigate } from 'react-router-dom';
import { useState, type MouseEventHandler } from 'react';
import HeaderButton from './HeaderButton';
import ThemeToggle from './ThemeToggle';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { BrandName } from '../../helpers';
import { useGlobalStore } from '../../state/zustand/global.store';
import SearchInput from './SearchInput';

const MainHeader = ({ onToggleSidebar }: { onToggleSidebar?: MouseEventHandler }) => {
  const navigate = useNavigate();
  const query = useGlobalStore(state => state.searchTerm);
  const setQuery = useGlobalStore(state => state.setSearchTerm);
  const [localSearch, setLocalSearch] = useState(query);

  const handleSearch = () => {
    setQuery(localSearch);
    navigate('/catalog');
  };

  return (
    <header className="sticky top-4 z-10 flex items-center justify-between gap-6 rounded-[14px] border border-(--line) bg-(--panel)/90 px-5 py-4 shadow-[0_18px_50px_rgba(var(--shadow-color),0.08)] backdrop-blur-sm sm:px-6">
      <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
        <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-(--surface-strong) text-xl font-black text-(--txt-color) md:flex">
          RP
        </div>
        <div className="hidden md:block">
          <p className="text-[1.05rem] font-black tracking-[-0.04em] text-(--txt-color)">
            {BrandName.toLocaleUpperCase()}
          </p>
          <p className="text-xs text-(--muted)">Amplia tu mente, amplia tus horizontes</p>
        </div>
      </Link>

      <SearchInput
        searchTerm={localSearch}
        setSearchTerm={setLocalSearch}
        goBack
        handleSearch={handleSearch}
      />

      {/* Right side: hidden on medium, burger shown on mobile */}
      <div className="flex items-center gap-3 text-(--txt-color)">
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <HeaderButton ariaLabel="Abrir carrito" onClick={() => navigate('/Cart')}>
            <span className="text-lg">
              <AiOutlineShoppingCart />
            </span>
          </HeaderButton>
          <HeaderButton ariaLabel="Abrir Perfil" onClick={() => navigate('/auth/login')}>
            <span className="text-lg">
              <FaUser />
            </span>
          </HeaderButton>
        </div>

        {/* Burger for mobile */}
        <button
          aria-label="Abrir menú"
          className="cursor-pointer p-2 text-(--txt-color) md:hidden"
          onClick={onToggleSidebar}
        >
          <FiMenu size={20} />
        </button>
      </div>
      {/* Non-modal header - mobile menu handled by Sidebar component */}
    </header>
  );
};

export default MainHeader;
