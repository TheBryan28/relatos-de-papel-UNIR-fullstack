const HeaderButton = ({
  children,
  className = 'grid h-11 w-11 place-items-center rounded-2xl border border-(--line) bg-(--panel) transition hover:bg-(--surface-strong)',
  ariaLabel = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      style={{ cursor: 'pointer' }}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
