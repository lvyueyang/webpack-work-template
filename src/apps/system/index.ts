import LOGO from './logo.svg';
import { createAppConfig } from '@/utils';
import System from './System';

export default System;

export const CONFIG = createAppConfig({
  title: '系统设置',
  key: 'system',
  LOGO,
  size: {
    width: 600,
    height: 400,
  },
  openMultiple: false,
});
