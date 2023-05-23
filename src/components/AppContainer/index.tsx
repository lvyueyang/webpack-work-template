import { useCurrentWindow, WindowContainer } from '@/react-window-launcher';
import styles from './index.module.less';
import { Suspense } from 'react';
import { Minus, Copy, Square, Close } from '@icon-park/react';

export function AppContainer({ children }: React.PropsWithChildren) {
  const { info, close, minimize, maximize, normalize, toFront } = useCurrentWindow();

  return (
    <WindowContainer
      className={styles.container}
      onMouseDown={() => {
        toFront();
      }}
      cancel={`.${styles.body}`}
    >
      <div className={styles.headerBar}>
        <div className={styles.title}>
          <img src={info.data?.LOGO} alt="" />
          {info?.title}
        </div>
        <div className={styles.operate}>
          <Minus
            onClick={() => {
              minimize();
            }}
            theme="outline"
          />
          {info.isMaximize ? (
            <Copy
              theme="outline"
              onClick={() => {
                normalize();
              }}
            />
          ) : (
            <Square
              theme="outline"
              onClick={() => {
                maximize();
              }}
            />
          )}
          <Close theme="outline" onClick={close} />
        </div>
      </div>
      <div
        className={styles.body}
        onMouseDown={() => {
          toFront();
        }}
      >
        <Suspense>{children}</Suspense>
      </div>
    </WindowContainer>
  );
}
