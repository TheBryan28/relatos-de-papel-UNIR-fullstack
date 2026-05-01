import { users } from '../../../services/mocks.ts';
import { books } from '../../../fakedata/books-data.ts';
import { orders } from '../../../services/mocksOrders.ts';

import Sidebar from '../components/Sidebar.tsx';
import ProfileInfo from '../components/ProfileInfo.tsx';
import LibrarySection from '../components/LibrarySection.tsx';
import OrdersTable from '../components/OrdersTable.tsx';


const ProfilePage = () => {
  const user = users[0];

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


