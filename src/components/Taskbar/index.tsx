import styles from './index.module.less';
import { cls } from '@/utils';
import { APP_LIST } from '@/Root/appList';
import { useOpenList } from '@/hooks/useOpenList';
import { launcher } from '@/react-window-launcher';
export function Taskbar() {
  const openList = useOpenList();

  return (
    <div className={styles.taskbar}>
      <div className={styles.list}>
        {APP_LIST.map((item) => {
          const isActive = openList.map((i) => i.key).includes(item.key);
          return (
            <dl
              className={cls(styles.item, isActive ? styles.active : '')}
              key={item.key}
              onClick={() => {
                if (isActive) {
                } else {
                  launcher.open(item.key);
                }
              }}
            >
              <dt>
                <img src={item.data?.LOGO} alt="" />
              </dt>
              <dd></dd>
            </dl>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}

export function TaskItem() {}
