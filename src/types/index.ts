import { WindowItem } from '@/react-window-launcher';

export interface AppConfig extends Partial<Omit<WindowItem, 'size' | 'title' | 'key'>> {
  size: { width: number; height: number };
  title: string;
  key: string;
  LOGO: string;
}

export type AxiosResult<T> = {
  code: number;
  message: string;
  data: T;
};

export type TypeValue<T> = T[keyof T];

export interface Pagination {
  /** 当前页码 */
  page: number;
  /** 每页条数 */
  page_size: number;
}

export interface Result<T> {
  code: number;
  data: T;
  msg: string;
}

export type ListResult<T> = Result<{
  /** 当前页码 */
  page: number;
  /** 总条数 */
  total: number;
  /** 列表数据 */
  list: T[];
}>;
