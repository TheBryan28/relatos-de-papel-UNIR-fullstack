import { useContext } from 'react';
import { AuthContext } from '../../../state/contexts/Auth.Context.tsx';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../../types/User.interface';
import useLogout from '../../../hooks/useLogout.ts';

type Props = {
  user: User;
};

 const Sidebar = ({ user }: Props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { logout, error } = useLogout();

  const handleLogout = () => {
    auth?.logout();
    navigate('/');
    logout();
  };

  return (
    <aside className="flex flex-col gap-4 rounded-[14px] border border-(--line) bg-(--panel) p-4">
      <div className="flex items-center gap-3">
        <img
          src={'https://pixabay.com/es/illustrations/search/icono%20de%20usuario/'}
          alt={user.name}
          className="h-12 w-12 rounded-full object-cover border border-(--line)"
        />

<div>
  <p className="font-bold text-(--txt-color)">{user.name}</p>
          <p className="text-sm text-(--txt-secondary)">Premium Member</p>
        </div>
      </div>

      <p className="text-sm text-(--muted)">
        {error && <span className="text-(--error-text)">{error}</span>}
      </p>

      <nav className="mt-4 flex flex-col gap-2">
        <button className="text-left p-2 rounded hover:bg-(--bg-color)">
          Library
        </button>
        <button className="text-left p-2 rounded hover:bg-(--bg-color)">
          Orders
        </button>
        <button className="text-left p-2 rounded hover:bg-(--bg-color)">
          Addresses
        </button>
        <button className="text-left p-2 rounded bg-(--bg-color)">
          Settings
        </button>
        <button
          onClick={handleLogout}
          className="mt-4 text-left p-2 rounded text-(--error-text) hover:bg-(--error-text)/10 flex items-center gap-2 font-bold"
        >
          Cerrar Sesión
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;