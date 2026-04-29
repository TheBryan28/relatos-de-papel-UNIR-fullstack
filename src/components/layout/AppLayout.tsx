import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../ui/Footer';
import MainHeader from '../ui/MainHeader';
import Sidebar from '../ui/Sidebar';

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigationLinks = [
    { label: 'Catálogo', to: '#' },
    { label: 'Colecciones', to: '#' },
    { label: 'Archivos', to: '#' },
    { label: 'Acerca de', to: '#' },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-(--bg-color) p-2 text-(--txt-color) sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(var(--shadow-color),0.08)_1px,transparent_0)] bg-size-[18px_18px] opacity-40" />
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-(--surface-strong)/70 blur-3xl" />
      <div className="absolute -right-28 -bottom-36 h-72 w-72 rounded-full bg-(--surface-strong)/60 blur-3xl" />

      <Sidebar
        menuItems={navigationLinks}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-1rem)] max-w-7xl flex-col gap-6">
        <MainHeader menuItems={navigationLinks} onToggleSidebar={() => setSidebarOpen(s => !s)} />

        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
      </div>
    </main>
  );
};

export default AppLayout;
