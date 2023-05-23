import styles from './index.module.less';
import { Taskbar } from '@/components/Taskbar';
import BG from '@/assets/imgs/bg2.jpg';
import Desktop from './Desktop';

export default function Root() {
  return (
    <div className={styles.rootContainer} style={{ backgroundImage: `url(${BG})` }}>
      {/* 桌面 */}
      <Desktop />
      {/* 应用菜单 */}
      <Taskbar />
    </div>
  );
}
