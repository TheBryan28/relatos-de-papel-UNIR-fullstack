import { users } from '../../../services/mocks';
import { books } from '../../../fakedata/books-data';
import { orders } from '../../../services/mocksOrders';

import Sidebar from '../components/Sidebar.tsx';
import ProfileInfo from '../components/ProfileInfo';
import LibrarySection from '../components/LibrarySection';
import OrdersTable from '../components/OrdersTable';


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


