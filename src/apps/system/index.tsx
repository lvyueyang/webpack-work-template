import LOGO from './logo.svg';
import { createAppConfig } from '@/utils';
import { AppContainer } from '@/components/AppContainer';

export default function System() {
  return <AppContainer>系统设置</AppContainer>;
}

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
