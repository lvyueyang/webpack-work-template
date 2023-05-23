import { useEffect, useState } from 'react';
import { launcher, OpenWindowItem } from '@/react-window-launcher';

export function useOpenList() {
  const [openList, setOpenList] = useState(launcher.openList);

  useEffect(() => {
    const handler = (e: OpenWindowItem[]) => {
      setOpenList([...e]);
    };
    launcher.on('change:openList', handler);
    return () => {
      // launcher.off('change:openList', handler);
    };
  }, []);

  return openList;
}
