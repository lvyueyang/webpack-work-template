import { create } from 'zustand';

interface AppStore {
  /** 是否登录 */
  isLogin: boolean;
  /** 设置登录状态 */
  setIsLogin: (isLogin: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin: boolean) => set(() => ({ isLogin })),
}));
