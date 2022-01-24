import { Affix, Col, Layout, Row } from 'antd';
import HeaderComponent from 'components/Header';
import LeftMenu from 'components/LeftMenu';
import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const { Content } = Layout;

export interface LayoutHomeProps {
  children: ReactNode;
}

export default function LayoutHome({ children }: LayoutHomeProps) {
  const location = useLocation();
  const [title, setTitle] = useState('dashboard');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setTitle('Dashboard');
    }
    if (path.includes('/add-pair-coin')) {
      setTitle('Add Pair Coin');
    }

    if (path.includes('/token')) {
      setTitle('Token');
    }
    if (path.includes('/customers')) {
      setTitle('Quản lý khách hàng');
    }
    if (path.includes('/missions')) {
      setTitle('Quản lý nhiệm vụ');
    }
    if (path.includes('/configuration')) {
      setTitle('Cấu hình');
    }
  }, [location]);

  return (
    <Layout className={styles.layoutHome}>
      <Affix offsetTop={0}>
        <HeaderComponent />
      </Affix>
      <Layout>
        <Row>
          <Col span={3}>
            <LeftMenu />
          </Col>
          <Col span={21}>
            <h3
              style={{
                padding: '10px 20px',
                borderBottom: '1px solid rgba(204, 204, 204, 0.3)',
              }}
            >
              {title}
            </h3>
            <Content>{children}</Content>
          </Col>
        </Row>
      </Layout>
    </Layout>
  );
}
