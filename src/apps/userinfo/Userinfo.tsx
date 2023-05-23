import { useEffect } from 'react';
import { useUserinfoStore } from './store';

export function Userinfo() {
  const { loadUserinfo } = useUserinfoStore();
  useEffect(() => {
    loadUserinfo();
  }, []);
  return null;
}
