import { useContext, useState, type SubmitEvent } from 'react';
import Button from '../../../components/ui/Button';
import InputText from '../../../components/ui/InputText';
import MainCard from '../../../components/ui/MainCard';
import { mockLogin } from '../../../services/mocks';
import { AuthContext } from '../../../contexts/Auth.Context';
import { PiWarningCircleLight } from 'react-icons/pi';

const Login = () => {
  const Auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loggedInUser = mockLogin(email, password);

    if (loggedInUser) {
      // guardar el usuario en el contexto de autenticación o en el estado global
      Auth?.setUser(loggedInUser);
      alert(`Bienvenido, ${loggedInUser.name}!`);
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  const fieldClass =
    'mt-2 w-full rounded-2xl border border-(--input-border) bg-(--input-bg) px-4 py-3 text-[15px] text-(--txt-color) outline-none transition placeholder:text-(--placeholder) focus:border-(--btn-color) focus:bg-(--panel)';

  return (
    <MainCard className="mx-auto w-full max-w-2xl">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-[-0.04em] text-(--txt-color) sm:text-4xl">
          Login
        </h2>
        <p className="text-base leading-7 text-(--muted)">
          Ingresa tus credenciales para acceder a tu cuenta.
        </p>
        {error && <p className="text-sm text-(--error-text)">{error}</p>}
        <code className="block rounded bg-(--btn-hover) p-4 text-sm text-(--txt-secondary)">
          <PiWarningCircleLight className="inline h-4 w-4" style={{ color: 'var(--error-text)' }} />{' '}
          Credenciales de prueba:
          <br />
          Email: juan@papel.com
          <br />
          Contraseña: 123456
        </code>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <InputText
            id="email"
            value={email}
            onChange={setEmail}
            placeholder="jane@paper.com"
            className={fieldClass}
            label="Correo electronico"
          />
        </div>

        <div>
          <InputText
            id="password"
            value={password}
            onChange={setPassword}
            placeholder="Crea una contrasena"
            type="password"
            className={fieldClass}
            label="Contrasena"
          />
        </div>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="submit" variant="primary" className="w-full cursor-pointer">
            Ingresar
          </Button>
        </div>
      </form>
    </MainCard>
  );
};

export default Login;
