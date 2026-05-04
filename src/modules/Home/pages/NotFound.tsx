import { FiArrowLeft, FiBookOpen, FiHome } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/ui/Button';
import MainCard from '../../../components/ui/MainCard';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-5 py-12 sm:px-8">
      <MainCard className="w-full overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm tracking-[0.35em] text-(--muted) uppercase">Error 404</span>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-(--txt-color) sm:text-5xl">
                Esta pagina se perdio entre los relatos
              </h1>
              <p className="text-base text-(--txt-secondary) sm:text-lg">
                El capitulo que intentas abrir no esta en nuestra biblioteca. Volvamos al inicio o
                sigue explorando con calma.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button onClick={() => navigate('/')} className="w-full sm:w-auto">
                <FiHome className="text-lg" />
                Ir al inicio
              </Button>
              <Button onClick={() => navigate(-1)} variant="outlined" className="w-full sm:w-auto">
                <FiArrowLeft className="text-lg" />
                Volver atras
              </Button>
            </div>
          </div>

          <section className="relative overflow-hidden rounded-xl border border-(--line) bg-(--surface-strong) p-6 text-center sm:p-8">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-(--btn-color)/10" />
            <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-(--btn-color)/5" />
            <div className="relative flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-(--panel)">
                <FiBookOpen className="text-2xl text-(--btn-color)" />
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-(--txt-color)">Archivo extraviado</p>
                <p className="text-sm text-(--txt-secondary)">
                  Si crees que esto es un error, prueba desde el catalogo o revisa la URL.
                </p>
              </div>
            </div>
          </section>
        </div>
      </MainCard>
    </main>
  );
};

export default NotFound;
