import React, { useState } from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

import { Button, Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { HddOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function LeftMenu() {
  const [key, setKey] = useState('');

  const handleClick = (e: any) => {
    console.log('click ', e.key);
    setKey(e.key);
  };

  return (
    <div className={styles.leftMenu}>
      <Menu
        className={styles.menu}
        onClick={() => handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          icon={<MailOutlined />}
          title="Token"
          className={styles.subMenu}
        >
          <Menu.Item className={styles.menuItem} key="/">
            <Link to="/add-token">Add Token</Link>
          </Menu.Item>
          <Menu.Item key="2" className={styles.menuItem}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" className={styles.menuItem}>
            Option 3
          </Menu.Item>
          <Menu.Item key="4" className={styles.menuItem}>
            Option 4
          </Menu.Item>
        </SubMenu>

        <SubMenu
          className={styles.subMenu}
          key="sub2"
          icon={<AppstoreOutlined />}
          title="Pair Coin"
        >
          <Menu.Item key="5" className={styles.menuItem}>
            <Link to="/add-pair-coin">Add Pair Coin</Link>
          </Menu.Item>
          <Menu.Item key="6" className={styles.menuItem}>
            Option 6
          </Menu.Item>
        </SubMenu>

        <SubMenu
          className={styles.subMenu}
          key="sub4"
          icon={<SettingOutlined />}
          title="Navigation Three"
        >
          <Menu.Item key="9" className={styles.menuItem}>
            Option 9
          </Menu.Item>

          <Menu.Item key="10" className={styles.menuItem}>
            Option 10
          </Menu.Item>

          <Menu.Item key="11" className={styles.menuItem}>
            Option 11
          </Menu.Item>

          <Menu.Item key="12" className={styles.menuItem}>
            Option 12
          </Menu.Item>
        </SubMenu>
      </Menu>

      {/* <Menu
        theme="light"
        mode="inline"
        onClick={(e) => handleClick(e)}
        selectedKeys={[key]}
      >
        <Menu.Item
          className={`${styles.menuItem} `}
          key="/"
          icon={<HddOutlined />}
        >
          <Link to="/">
            <span className={styles.menuItemTitle}>Dashboard</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          className={styles.menuItem}
          key="/employees"
          icon={<UserOutlined />}
        >
          <Link to="/employees">
            <span className={styles.menuItemTitle}>Quản lý nhân viên</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          className={styles.menuItem}
          key="/users"
          icon={<SolutionOutlined />}
        >
          <Link to="/users">
            <span className={styles.menuItemTitle}>Quản lý người dùng</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          className={styles.menuItem}
          key="/customers"
          icon={<TeamOutlined />}
        >
          <Link to="/customers">
            <span className={styles.menuItemTitle}>Quản lý khách hàng</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          className={styles.menuItem}
          key="/missions"
          icon={<ScheduleOutlined />}
        >
          <Link to="/missions">
            <span className={styles.menuItemTitle}>Quản lý nhiệm vụ</span>
          </Link>
        </Menu.Item>

        <Menu.Item
          className={styles.menuItem}
          key="/configuration"
          icon={<SettingOutlined />}
        >
          <Link to="/configuration">
            <span className={styles.menuItemTitle}>Cấu hình</span>
          </Link>
        </Menu.Item>
      </Menu> */}
    </div>
  );
}
