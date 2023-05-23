import { request, Result, AIP_FIX } from '@/request';

import { UserInfo } from './interface';

/** 获取当前登录用户信息 */
export const getUserInfo = () => {
  return request.post<Result<UserInfo>>(`${AIP_FIX}/user/userInfo`, {}, { ignoreNotice: true });
};
