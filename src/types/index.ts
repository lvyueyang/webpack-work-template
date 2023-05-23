import { WindowItem } from '@/react-window-launcher';

export interface AppConfig extends Partial<Omit<WindowItem, 'size' | 'title' | 'key'>> {
  size: { width: number; height: number };
  title: string;
  key: string;
  LOGO: string;
}

export type TypeValue<T> = T[keyof T];
