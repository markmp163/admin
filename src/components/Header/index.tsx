import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'antd';

export default function HeaderComponent() {
  // const location = useLocation();
  // const [title, setTitle] = useState('dashboard');

  // useEffect(() => {
  //   const path = location.pathname;
  //   if (path === '/') {
  //     setTitle('dashboard');
  //   }

  //   if (path.includes('/employees')) {
  //     setTitle('Quản lý nhân viên');
  //   }

  //   if (path.includes('/users')) {
  //     setTitle('Quản lý người dùng');
  //   }
  //   if (path.includes('/customers')) {
  //     setTitle('Quản lý khách hàng');
  //   }
  //   if (path.includes('/missions')) {
  //     setTitle('Quản lý nhiệm vụ');
  //   }
  //   if (path.includes('/configuration')) {
  //     setTitle('Cấu hình');
  //   }
  // }, [location]);
  return (
    <Row className={styles.wrapper}>
      <Col span={3} style={{ textAlign: 'center' }}>
        <Link to="/" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            className={styles.image}
            src="https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png"
            alt="Logo"
          />
          <h2 className={styles.title}>Binace</h2>
        </Link>
      </Col>
      <Col span={19}></Col>
    </Row>
  );
}
