import { AppConfig } from '@/types';
import { message } from 'antd';

interface TransformPaginationOption {
  current?: number;
  pageSize?: number;
}
/** antd-pro-table 分页参数格式化 */
export function transformPagination({ current, pageSize }: TransformPaginationOption) {
  return {
    page: current || 1,
    page_size: pageSize || 10,
  };
}

/** 复制文字 */
export const copyText = (text: string) => {
  return new Promise((resolve, reject) => {
    try {
      if (typeof window.navigator.clipboard?.writeText === 'function') {
        window.navigator.clipboard.writeText(text).then(resolve).catch(reject);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.select();
        document.execCommand('Copy');
        resolve(true);
      }
    } catch (e) {
      message.error('复制失败');
      reject(e);
    }
  });
};

export function downloadFile(url: string, name?: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = name || url.split('/').reverse()[0];
  a.target = '_blank';
  a.click();
  a.remove();
}

export function isJson(value: string) {
  try {
    const obj = JSON.parse(value);
    if (typeof obj === 'object' && !!obj) {
      return obj;
    }
    return false;
  } catch (e) {
    return false;
  }
}

/** 计算冗余数 */
export function redundancyCount(len: number) {
  if (len <= 4) {
    return 1;
  }
  if (len > 4 && len <= 9) {
    return 2;
  }
  if (len > 9 && len <= 14) {
    return 3;
  }
  return 4;
}

/** 合并 className */
export function cls(...classList: (string | undefined)[]) {
  return classList.filter((i) => !!i).join(' ');
}

export function createAppConfig({ title, key, size, LOGO, ...options }: AppConfig) {
  return {
    ...options,
    title,
    key,
    size: {
      minWidth: 300,
      minHeight: 300,
      ...size,
    },
    data: {
      LOGO,
      ...options.data,
    },
  };
}
