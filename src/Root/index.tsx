import styles from './index.module.less';
import { Taskbar } from '@/components/Taskbar';
import BG from '@/assets/imgs/bg2.jpg';
import Desktop from './Desktop';
import { Login } from '@/apps/login';

import ConfigProvider from './ConfigProvider';
import { Userinfo } from '@/apps/userinfo';

export default function Root() {
  return (
    <ConfigProvider>
      <div className={styles.rootContainer} style={{ backgroundImage: `url(${BG})` }}>
        {/* 桌面 */}
        <Desktop />
        {/* 应用菜单 */}
        <Taskbar />
      </div>
      {/* 登录 */}
      <Login />
      {/* 用户信息 */}
      <Userinfo />
    </ConfigProvider>
  );
}
