import { FiChevronRight } from 'react-icons/fi';
import { useId, useState, type ReactNode } from 'react';

interface DropdownProps {
  label: string;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const Dropdown = ({ label, children, defaultOpen = false, className = '' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <div className={`flex w-full flex-col gap-1 ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(open => !open)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className={`flex w-full items-center justify-between rounded-xl border border-(--line) px-3 py-3 text-left text-sm font-semibold text-(--txt-color) transition hover:bg-(--surface-strong) ${
          isOpen ? 'bg-(--panel)' : 'bg-(--surface-strong)'
        }`}
      >
        <span>{label}</span>
        <FiChevronRight
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={contentId}
        className={`overflow-hidden rounded-xl border border-(--line) bg-(--panel) px-4 transition-all duration-300 ${
          isOpen ? 'max-h-96 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <div className="text-sm text-(--txt-secondary)">{children}</div>
      </div>
    </div>
  );
};

export default Dropdown;
