import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  id: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-(--btn-color) text-(--btn-text) shadow-[0_10px_20px_rgba(var(--shadow-color),0.12)] hover:-translate-y-0.5 hover:bg-(--btn-hover)',
  secondary: 'bg-(--surface-strong) text-(--txt-color) hover:-translate-y-0.5 hover:bg-(--panel)',
  outlined: 'border border-(--line) bg-transparent text-(--txt-color) hover:bg-(--panel)',
  ghost: 'bg-transparent text-(--txt-color) hover:bg-(--txt-color)/5',
};

const Button = ({
  id,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-3 text-sm tracking-[0.08em] uppercase transition duration-200 focus-visible:ring-2 focus-visible:ring-(--txt-color) focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg-color) focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...props}
      id={id}
      data-testid={id}
    />
  );
};

export default Button;
