import { BrandName } from '../../helpers';

const footerLinks = [
  'Política de privacidad',
  'Términos de servicio',
  'Contacto',
  'Envíos y devoluciones',
];

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 rounded-[14px] border border-(--line) bg-(--panel)/90 px-5 py-5 shadow-[0_18px_50px_rgba(var(--shadow-color),0.06)] sm:px-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-2xl font-black tracking-[-0.04em] text-(--txt-color)">
          {BrandName.toLocaleUpperCase()}
        </p>
        <p className="mt-1 text-sm text-(--txt-secondary)">
          Una experiencia de compra clara, simple y segura.
        </p>
      </div>

      <nav
        className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-(--txt-secondary)"
        aria-label="Información legal"
      >
        {footerLinks.map(link => (
          <a key={link} href="#" className="transition hover:text-(--txt-color)">
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3 text-sm text-(--txt-secondary)">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-(--line) bg-(--bg-color) text-base font-black text-(--txt-color)">
          ©
        </span>
        <p>2026, Grupo 3, UNIR</p>
      </div>
    </footer>
  );
};

export default Footer;
