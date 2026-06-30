import { Link, useNavigate } from 'react-router-dom';
import { useContext, type MouseEventHandler } from 'react';
import HeaderButton from './HeaderButton';
import ThemeToggle from './ThemeToggle';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUser, FaRightFromBracket } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { BrandName } from '../../helpers';
import { useGlobalStore } from '../../state/zustand/global.store';
import { AuthContext } from '../../state/contexts/Auth.Context';
import SearchInput from './SearchInput';
import { useCart } from '../../state/contexts/Cart.Context';

const MainHeader = ({ onToggleSidebar }: { onToggleSidebar?: MouseEventHandler }) => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { cart } = useCart();
  const query = useGlobalStore(state => state.searchTerm);
  const setQuery = useGlobalStore(state => state.setSearchTerm);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = () => {
    navigate('/catalog');
  };

  const handleProfileClick = () => {
    if (auth?.isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/auth/login');
    }
  };

  const handleLogout = () => {
    auth?.logout();
    navigate('/');
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
        searchTerm={query}
        setSearchTerm={setQuery}
        goBack
        handleSearch={handleSearch}
      />

      {/* Right side: hidden on medium, burger shown on mobile */}
      <div className="flex items-center gap-3 text-(--txt-color)">
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <div className="relative">
            <HeaderButton id="cart-button" ariaLabel="Abrir carrito" onClick={() => navigate('/cart')}>
              <span className="text-lg">
                <AiOutlineShoppingCart />
              </span>
            </HeaderButton>
            {cartCount > 0 && (
              <span data-testid="cart-count-badge" className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-(--btn-color) px-1 text-[10px] font-black text-(--btn-text)">
                {cartCount}
              </span>
            )}
          </div>
          <HeaderButton
            id="profile-button"
            ariaLabel={auth?.isAuthenticated ? 'Ver Perfil' : 'Iniciar Sesión'}
            onClick={handleProfileClick}
          >
            <span className="text-lg">
              <FaUser />
            </span>
          </HeaderButton>
          {auth?.isAuthenticated && (
            <HeaderButton id="logout-button" ariaLabel="Cerrar Sesión" onClick={handleLogout}>
              <span className="text-lg text-(--error-text)">
                <FaRightFromBracket />
              </span>
            </HeaderButton>
          )}
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
