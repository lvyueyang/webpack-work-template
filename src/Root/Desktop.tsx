import { WindowLauncher, launcher } from '@/react-window-launcher';
import styles from './index.module.less';
import { APP_LIST } from './appList';

export default function Desktop() {
  return (
    <WindowLauncher className={styles.desktop} windowList={APP_LIST}>
      <div className={styles.appList}>
        {APP_LIST.map((item) => {
          return (
            <div
              className={styles.appItem}
              key={item.key}
              onDoubleClick={() => {
                const { x } = launcher.getCenter((item.size?.width as number) / 2, 0);
                launcher.open(item.key, {
                  size: item.size,
                  position: { x, y: 20 },
                });
              }}
            >
              <img className={styles.logo} src={item.data?.LOGO} alt="" />
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </WindowLauncher>
  );
}
