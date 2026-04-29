import { Link, useNavigate } from 'react-router-dom';
import type { MouseEventHandler } from 'react';
import HeaderButton from './HeaderButton';
import ThemeToggle from './ThemeToggle';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { BrandName } from '../../helpers';
import type { MenuItem } from '../../types/MenuItem.interface';

const MainHeader = ({
  menuItems,
  onToggleSidebar,
}: {
  menuItems: MenuItem[];
  onToggleSidebar?: MouseEventHandler;
}) => {
  const navigate = useNavigate();

  return (
    <header className="relative flex items-center justify-between gap-6 rounded-[14px] border border-(--line) bg-(--panel)/90 px-5 py-4 shadow-[0_18px_50px_rgba(var(--shadow-color),0.08)] backdrop-blur-sm sm:px-6">
      <div className="flex items-center gap-3">
        <div className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-(--surface-strong) text-xl font-black text-(--txt-color) sm:flex">
          RP
        </div>
        <div>
          <p className="text-[1.05rem] font-black tracking-[-0.04em] text-(--txt-color) sm:text-[1.15rem]">
            {BrandName.toLocaleUpperCase()}
          </p>
          <p className="hidden text-xs tracking-[0.24em] text-(--muted) uppercase sm:block">
            Pago seguro
          </p>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
        {menuItems.map(link => (
          <Link
            key={link.label}
            to={link.to}
            className="text-[0.95rem] font-medium text-(--txt-secondary) transition hover:text-(--txt-color)"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right side: hidden on medium, burger shown on mobile */}
      <div className="flex items-center gap-3 text-(--txt-color)">
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <HeaderButton ariaLabel="Abrir carrito" onClick={() => navigate('/checkout')}>
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
