import type { FC } from 'react';

interface InputTextProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
  className?: string;
  label?: string;
}

const InputText: FC<InputTextProps> = ({
  id,
  value,
  onChange,
  onKeyDown,
  required = false,
  placeholder = '',
  type = 'text',
  className = '',
  label,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-bold tracking-[0.16em] text-(--txt-secondary) uppercase"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        data-testid={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        required={required}
        className={`mt-2 w-full rounded-2xl border border-(--input-border) bg-(--input-bg) px-3 py-2 text-[15px] text-(--txt-color) transition outline-none placeholder:text-(--placeholder) focus:border-(--btn-color) focus:bg-(--panel) ${className}`}
      />
    </div>
  );
};

export default InputText;
