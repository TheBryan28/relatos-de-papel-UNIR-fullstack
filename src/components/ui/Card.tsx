import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Card = ({ className = '', children, ...props }: CardProps) => {
  return (
    <div
      className={`rounded-[28px] border border-(--line) bg-(--panel) p-5 shadow-[0_24px_60px_rgba(var(--shadow-color),0.08)] backdrop-blur-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card