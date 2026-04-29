import { BrandName } from '../../helpers';
import type { MenuItem } from '../../types/MenuItem.interface';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import HeaderButton from './HeaderButton';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa6';

interface SidebarProps {
  menuItems?: MenuItem[];
  open?: boolean; // controlled open state
  onClose?: () => void;
}

const Sidebar = ({ menuItems = [], open, onClose }: SidebarProps) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onClose) onClose();
  };

  return (
    <>
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-40 h-screen w-64 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'pointer-events-none -translate-x-full'}`}
        aria-hidden={!open}
        {...(!open ? { inert: false } : {})}
      >
        <div className="h-full overflow-y-auto bg-(--panel) px-3 py-4">
          <div className="mb-6 px-2">
            <Link to="/" onClick={handleClose} className="text-lg font-black text-(--txt-color)">
              {BrandName.toLocaleUpperCase()}
            </Link>
          </div>

          <ul className="space-y-2 font-medium">
            {menuItems.length === 0 ? (
              <li>
                <a
                  href="#"
                  className="flex items-center rounded-lg p-2 text-(--txt-color) hover:bg-(--surface-strong)"
                >
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
            ) : (
              menuItems.map(it => (
                <li key={it.label}>
                  <Link
                    to={it.to ?? '#'}
                    className="flex items-center gap-3 rounded-lg p-2 text-(--txt-color) hover:bg-(--surface-strong)"
                  >
                    {it.icon && <span className="text-lg">{it.icon}</span>}
                    <span className="ms-3">{it.label}</span>
                  </Link>
                </li>
              ))
            )}
          </ul>

          <div className="flex items-center gap-3">
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
        </div>
      </aside>

      {/* Overlay shown only on mobile when sidebar open */}
      {!open ? null : (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          aria-hidden
          onClick={handleClose}
        />
      )}
    </>
  );
};

export default Sidebar;
