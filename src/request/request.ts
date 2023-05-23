import { getIsLogin, openLogin } from '@/apps/login';
import { message, notification } from '@/utils/notice';
import axios, { AxiosRequestConfig } from 'axios';

export interface CustomConfig extends AxiosRequestConfig {
  // 请求错误时不弹出错误提示
  ignoreNotice?: boolean;
  // 身份过期不跳转登录页
  ignoreLogin?: boolean;
}

const httpRequest = axios.create({
  baseURL: '/',
});

/** 请求拦截 */
httpRequest.interceptors.request.use((config) => {
  return config;
});

/** 响应拦截 */
httpRequest.interceptors.response.use(
  (response) => {
    const config = response.config as CustomConfig;
    const data = response.data || {};

    // 忽略身份过期重定向

    if (data.code !== 1000) {
      console.log('data: ', data, getIsLogin());
      // 是否忽略错误提示
      if (!config.ignoreNotice) {
        message.error(data.msg);
      }
      // 是否忽略身份过期跳转登录页
      if (!config.ignoreLogin && data.code === 40001 && !getIsLogin()) {
        openLogin();
      }
      return Promise.reject(response);
    }

    return Promise.resolve(response);
  },
  (error) => {
    return Promise.reject(error);
  },
);

class Request {
  get<T>(url: string, config?: CustomConfig) {
    return httpRequest.get<T>(url, config);
  }
  post<T>(url: string, data?: Record<string, any>, config?: CustomConfig) {
    return httpRequest.post<T>(url, data, config);
  }
  put<T>(url: string, data: Record<string, any>, config?: CustomConfig) {
    return httpRequest.put<T>(url, config);
  }
  delete<T>(url: string, config?: CustomConfig) {
    return httpRequest.delete<T>(url, config);
  }
}

export async function awaitRequest<T, E = any>(
  promiseFn: () => Promise<any>,
): Promise<[E | null, T | null]> {
  try {
    const result = await promiseFn();
    return [null, result];
  } catch (err: any) {
    return [err, null];
  }
}

export const request = new Request();
