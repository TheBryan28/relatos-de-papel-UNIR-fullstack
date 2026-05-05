import { useContext } from 'react';
import { AuthContext } from '../../../state/contexts/Auth.Context.tsx';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../../types/User.interface';

type Props = {
  user: User;
};

 const Sidebar = ({ user }: Props) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <aside className="flex flex-col gap-4 rounded-[14px] border border-(--line) bg-(--panel) p-4">
      <div className="flex items-center gap-3">
        <img
  src={user.profile}
  alt={user.name}
  className="h-12 w-12 rounded-full object-cover border border-(--line)"
  onError={(e) => {
    e.currentTarget.src = 'https://via.placeholder.com/100';
  }}
/>

<div>
  <p className="font-bold text-(--txt-color)">{user.name}</p>
          <p className="text-sm text-(--txt-secondary)">Premium Member</p>
        </div>
      </div>

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
          onClick={() => {
            auth?.logout();
            navigate('/');
          }}
          className="mt-4 text-left p-2 rounded text-(--error-text) hover:bg-(--error-text)/10 flex items-center gap-2 font-bold"
        >
          Cerrar Sesión
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;