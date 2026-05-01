import { Route, Routes } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import LandingPage from '../modules/Home/pages/LandingPage';
import Login from '../modules/Auth/pages/Login';
import Signup from '../modules/Auth/pages/Signup';
import Checkout from '../modules/Payment/pages/Checkout';
import BookDetail from '../modules/Book/pages/BookDetail';
import ProfilePage from '../modules/profile/page/ProfilePage';

const MainRouter = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
