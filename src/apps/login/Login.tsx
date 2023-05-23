import { Button, Form, Input } from 'antd';
import styles from './index.module.less';
import { useLoginStore } from './login.store';
import { LoginBody } from './interface';
import { useState } from 'react';
import { TOKEN_COOKIE_KEY } from '@/constants';
import { login } from './services';
import { userinfoStore } from '@/apps/userinfo';
import { theme } from '@/theme';
import Cookies from 'js-cookie';

type FormValues = LoginBody;

export function Login() {
  const { isLogin, setIsLogin } = useLoginStore();
  const [loading, setLoading] = useState(false);
  if (!isLogin) return null;

  const submitHandler = async (formValue: LoginBody) => {
    setLoading(true);
    login(formValue)
      .then(({ data }) => {
        Cookies.set(TOKEN_COOKIE_KEY, data.data.token);
        userinfoStore.getState().loadUserinfo();
        setIsLogin(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className={styles.loginContainer}>
      <div className={styles.form}>
        <Form<FormValues> labelCol={{ span: 5 }} onFinish={submitHandler} layout="vertical">
          <div className={styles.title} style={{ color: theme.colorPrimary }}>
            土星云
          </div>
          <div className={styles.subTitle}>登录</div>
          <Form.Item
            label="用户名"
            name="user_name"
            required={false}
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入您的用户名" autoComplete="off" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            required={false}
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入您的密码" autoComplete="off" />
          </Form.Item>
          <br />
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
