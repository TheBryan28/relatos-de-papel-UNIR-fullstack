import { useContext } from 'react';
import { AuthContext } from '../../../state/contexts/Auth.Context.tsx';
import { orders } from '../../../services/mocksOrders.ts';

import Sidebar from '../components/Sidebar.tsx';
import ProfileInfo from '../components/ProfileInfo.tsx';
import OrdersTable from '../components/OrdersTable.tsx';

const ProfilePage = () => {
  const auth = useContext(AuthContext);
  const user = auth?.user;

  if (!user) return null;

  return (
    <div className="grid grid-cols-[260px_1fr] gap-6">
       <Sidebar user={user} />

      <main className="flex flex-col gap-6">
        <ProfileInfo user={user} />
        {
          // <LibrarySection books={books.slice(0, 6)} />
        }
        <OrdersTable orders={orders.slice(0, 5)} />
      </main>
    </div>
  );
};

export default ProfilePage;


