import { request, Result, AIP_FIX } from '@/request';
import { LoginResult, LoginBody } from './interface';

/** 登录 */
export const login = ({ user_name, password }: LoginBody) => {
  return request.post<Result<LoginResult>>(`${AIP_FIX}/user/login`, { user_name, password });
};
