import { create } from 'zustand';
import { UserInfo } from './interface';
import { getUserInfo } from './services';

interface UserinfoStore {
  user?: UserInfo;
  /** 获取用户信息 */
  loadUserinfo: () => void;
  /** 更改用户信息 */
  updateUserinfo: (user: UserInfo) => void;
}

export const userinfoStore = create<UserinfoStore>((set) => ({
  user: void 0,
  loadUserinfo: () => {
    getUserInfo().then((res) => {
      set({ user: res.data.data });
    });
  },
  updateUserinfo: (user: UserInfo) => {
    set(() => ({ user }));
  },
}));

export const useUserinfoStore = userinfoStore;
