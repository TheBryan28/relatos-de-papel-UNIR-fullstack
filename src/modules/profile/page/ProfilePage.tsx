import { useContext } from 'react';
import { AuthContext } from '../../../state/contexts/Auth.Context.tsx';
import { books } from '../../../services/books-data.ts';
import { orders } from '../../../services/mocksOrders.ts';

import Sidebar from '../components/Sidebar.tsx';
import ProfileInfo from '../components/ProfileInfo.tsx';
import LibrarySection from '../components/LibrarySection.tsx';
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
        <LibrarySection books={books} />
        <OrdersTable orders={orders} />
      </main>
    </div>
  );
};

export default ProfilePage;


