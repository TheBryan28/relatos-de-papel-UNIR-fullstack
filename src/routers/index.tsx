import { Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import ProtectedLayout from '../components/layout/ProtectedLayout';
import LandingPage from '../modules/Home/pages/LandingPage';
import Login from '../modules/Auth/pages/Login';
import Signup from '../modules/Auth/pages/Signup';
import Checkout from '../modules/Payment/pages/Checkout';
import PaymentConfirmed from '../modules/Payment/pages/PaymentConfirmed';
import PaymentError from '../modules/Payment/pages/PaymentError';
import BookDetail from '../modules/Book/pages/BookDetail';
import ProfilePage from '../modules/profile/page/ProfilePage';
import NotFound from '../modules/Home/pages/NotFound';
import Cart from '../modules/Cart/Pages/Cart';
import Catalog from '../modules/Catalog/pages/Catalog';

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Signup />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment/confirmed" element={<PaymentConfirmed />} />
          <Route path="/payment/error" element={<PaymentError />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
