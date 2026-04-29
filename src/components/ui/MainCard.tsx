import type { HTMLAttributes, ReactNode } from 'react';

interface MainCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const MainCard = ({ children, className = '', ...props }: MainCardProps) => {
  return (
    <main
      className={`rounded-[14px] border border-(--line) bg-(--panel)/90 p-2 shadow-[0_24px_60px_rgba(var(--shadow-color),0.08)] backdrop-blur-sm sm:p-6 lg:p-8 ${className}`}
      {...props}
    >
      {children}
    </main>
  );
};

export default MainCard;
