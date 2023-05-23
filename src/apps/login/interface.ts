export interface LoginBody {
  /** 用户名 */
  user_name: string;
  /** 密码 */
  password: string;
}
export interface LoginResult {
  /** 用户 token */
  token: string;
}
