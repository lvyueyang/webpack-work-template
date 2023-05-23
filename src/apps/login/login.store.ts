import { create } from 'zustand';

interface LoginStore {
  /** 是否登录 */
  isLogin: boolean;
  /** 设置登录状态 */
  setIsLogin: (isLogin: boolean) => void;
}

export const loginStore = create<LoginStore>((set) => ({
  isLogin: false,
  setIsLogin: (isLogin: boolean) => set(() => ({ isLogin })),
}));

export const useLoginStore = loginStore;

export const openLogin = () => {
  console.log('openLogin: ');
  loginStore.setState({ isLogin: true });
};
export const closeLogin = () => {
  loginStore.setState({ isLogin: false });
};
export const getIsLogin = () => {
  return loginStore.getState().isLogin;
};
