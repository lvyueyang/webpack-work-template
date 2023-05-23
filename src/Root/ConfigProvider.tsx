import { theme } from '@/theme';
import Notice from '@/utils/notice';
import { ConfigProvider as AntdConfigProvider, App } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import dayjs from 'dayjs';

dayjs.locale('zh-cn');

export default function ConfigProvider({ children }: React.PropsWithChildren) {
  return (
    <AntdConfigProvider
      locale={zhCN}
      theme={{
        token: {
          ...theme,
        },
      }}
      form={{
        colon: false,
      }}
    >
      <App>
        {children}
        <Notice />
      </App>
    </AntdConfigProvider>
  );
}
