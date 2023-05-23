import { WindowItem } from '@/react-window-launcher';
import { lazy } from 'react';

import { CONFIG as SystemConfig } from '@/apps/system';

const SystemApp = lazy(() => import('@/apps/system'));

export const APP_LIST: WindowItem[] = [
  {
    ...SystemConfig,
    component: <SystemApp />,
  },
];
