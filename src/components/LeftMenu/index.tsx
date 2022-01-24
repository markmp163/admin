import React from 'react';
import './style.css'

import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default function LeftMenu() {
  // const [key, setKey] = useState('');

  // const handleClick = (e: any) => {
  //   console.log('click ', e.key);
  //   setKey(e.key);
  // };

  return (
    <div className=''>
      <Menu
        className='leftMenu'
        // onClick={() => handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          icon={<MailOutlined />}
          title="Token"
          className=''
        >
          <Menu.Item key="/">
            <Link to="/token">Token</Link>
          </Menu.Item>
          <Menu.Item key="2">
            Option 2
          </Menu.Item>
          <Menu.Item key="3">
            Option 3
          </Menu.Item>
          <Menu.Item key="4">
            Option 4
          </Menu.Item>
        </SubMenu>

        <SubMenu
          className=''
          key="sub2"
          icon={<AppstoreOutlined />}
          title="Pair Coin"
        >
          <Menu.Item key="5">
            <Link to="/add-pair-coin">Add Pair Coin</Link>
          </Menu.Item>
          <Menu.Item key="6">
            Option 6
          </Menu.Item>
        </SubMenu>

        <SubMenu
          className=''
          key="sub4"
          icon={<SettingOutlined />}
          title="Navigation Three"
        >
          <Menu.Item key="9" className=''>
            Option 9
          </Menu.Item>

          <Menu.Item key="10" className=''>
            Option 10
          </Menu.Item>

          <Menu.Item key="11" className=''>
            Option 11
          </Menu.Item>

          <Menu.Item key="12">
            Option 12
          </Menu.Item>
        </SubMenu>
      </Menu>

    </div>
  );
}
