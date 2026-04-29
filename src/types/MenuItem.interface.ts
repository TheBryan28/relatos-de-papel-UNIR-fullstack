import type { ReactNode } from 'react';

export interface MenuItem {
  label: string;
  to: string;
  icon?: ReactNode;
}
