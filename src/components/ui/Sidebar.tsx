import { BrandName } from '../../helpers';
import type { MenuItem } from '../../types/MenuItem.interface';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import HeaderButton from './HeaderButton';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../../state/contexts/Auth.Context';
import { FaUser, FaRightFromBracket } from 'react-icons/fa6';
import useLogout from '../../hooks/useLogout';

interface SidebarProps {
  menuItems?: MenuItem[];
  open?: boolean; // controlled open state
  onClose?: () => void;
}

const Sidebar = ({ menuItems = [], open, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const { logout } = useLogout();

  const handleClose = () => {
    if (onClose) onClose();
  };

  const handleProfileClick = () => {
    handleClose();
    if (auth?.isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/auth/login');
    }
  };

  const handleLogout = () => {
    handleClose();
    auth?.logout();
    navigate('/');
    logout();
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
                    onClick={handleClose}
                    className="flex items-center gap-3 rounded-lg p-2 text-(--txt-color) hover:bg-(--surface-strong)"
                  >
                    {it.icon && <span className="text-lg">{it.icon}</span>}
                    <span className="ms-3">{it.label}</span>
                  </Link>
                </li>
              ))
            )}
          </ul>

          <div className="mt-8 flex flex-col gap-4 border-t border-(--line) pt-6">
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <HeaderButton
                ariaLabel="Abrir carrito"
                id='sidebar-cart-button'
                onClick={() => {
                  handleClose();
                  navigate('/cart');
                }}
              >
                <span className="text-lg">
                  <AiOutlineShoppingCart />
                </span>
              </HeaderButton>
            </div>

            <button
              onClick={handleProfileClick}
              className="flex w-full items-center gap-3 rounded-xl bg-(--surface-strong) p-3 text-(--txt-color) transition-colors hover:bg-(--surface-strong)/80"
            >
              <FaUser />
              <span className="font-medium">
                {auth?.isAuthenticated ? 'Mi Perfil' : 'Iniciar Sesión'}
              </span>
            </button>

            {auth?.isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl bg-(--error-text)/10 p-3 text-(--error-text) transition-colors hover:bg-(--error-text)/20"
              >
                <FaRightFromBracket />
                <span className="font-medium">Cerrar Sesión</span>
              </button>
            )}
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
