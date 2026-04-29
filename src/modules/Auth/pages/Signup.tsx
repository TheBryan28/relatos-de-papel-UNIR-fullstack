import { useState, type SubmitEvent } from 'react';
import Button from '../../../components/ui/Button';
import InputText from '../../../components/ui/InputText';
import MainCard from '../../../components/ui/MainCard';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Las contrasenas no coinciden');
      return;
    }

    console.log('USUARIO REGISTRADO', { name, email, password });
  };

  const fieldClass =
    'mt-2 w-full rounded-2xl border border-(--input-border) bg-(--input-bg) px-4 py-3 text-[15px] text-(--txt-color) outline-none transition placeholder:text-(--placeholder) focus:border-(--btn-color) focus:bg-(--panel)';

  return (
    <MainCard className="mx-auto w-full max-w-2xl">
      <div className="space-y-3">
        <p className="text-sm font-bold tracking-[0.28em] text-(--txt-secondary) uppercase">
          Registro
        </p>
        <h2 className="text-3xl font-bold tracking-[-0.04em] text-(--txt-color) sm:text-4xl">
          Crea tu cuenta.
        </h2>
        <p className="text-base leading-7 text-(--muted)">
          El formulario usa el mismo sistema monocromatico que las tarjetas y los botones para
          mantener una experiencia consistente.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <InputText
            id="name"
            value={name}
            onChange={setName}
            placeholder="Juan Perez"
            className={fieldClass}
            label="Nombre"
          />
        </div>

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

        <div>
          <InputText
            id="confirmPassword"
            value={confirmPassword}
            onChange={setConfirmPassword}
            placeholder="Repite la contrasena"
            type="password"
            className={fieldClass}
            label="Confirmar contrasena"
          />
        </div>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button type="submit" variant="primary" className="w-full cursor-pointer">
            Registrarse
          </Button>
        </div>
      </form>
    </MainCard>
  );
};

export default Signup;
