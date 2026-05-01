import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main
      className="flex min-h-[70vh] items-center justify-center px-6 py-12 md:px-12"
      style={{ color: 'var(--txt-color)' }}
    >
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8">
          <h1 className="mb-4 text-8xl font-bold" style={{ color: 'var(--btn-color)' }}>
            404
          </h1>
          <h2 className="mb-4 text-4xl font-bold">Página no encontrada</h2>
          <p className="mb-8 text-lg" style={{ color: 'var(--txt-secondary)' }}>
            Lo sentimos, la página que buscas no existe en nuestro archivo.
          </p>
        </div>

        <div
          className="mb-8 rounded p-8"
          style={{
            backgroundColor: 'var(--panel)',
            boxShadow: `0 2px 6px rgba(var(--shadow-color), 0.06)`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-6"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ color: 'var(--btn-color)' }}
          >
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M7 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 11V7a2 2 0 012-2h2a2 2 0 012 2v4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="19" cy="17" r="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p style={{ color: 'var(--txt-secondary)' }}>
            Parece que esta sección del archivo está vacía o no está disponible en este momento.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => navigate('/')}
            className="rounded-md px-8 py-3"
            style={{ backgroundColor: 'var(--btn-color)', color: 'var(--btn-text)' }}
          >
            Ir al inicio
          </button>

          <button
            onClick={() => navigate(-1)}
            className="rounded-md border px-8 py-3"
            style={{
              borderColor: 'var(--line)',
              backgroundColor: 'transparent',
              color: 'var(--txt-color)',
            }}
          >
            Volver atrás
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
