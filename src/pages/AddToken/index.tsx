
import React, { useState } from 'react';
import './styles.css'
import { Form, Input, Button } from 'antd';
import { Checkbox, Select } from 'antd';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import { PlusOutlined } from '@ant-design/icons';

import Modal from 'antd/lib/modal/Modal';

export default function AppAddToken() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { Option } = Select;
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const [newToken, setNewToken] = useState({
    tokenId: '',
    description: '',
    applicableWallets: [],
    icon: '',
    smartContact: '',
    website: '',
    tags: []
  })

  const children = ['Defi', 'BSC Chain', 'Solana']

  const childrenTags: any = []
  children.map((x) => childrenTags.push(<Option key={x.toString()}>{x}</Option>))

  const handleTagChange = (value: any) => {
    let arr = value.map((x: string) => Number(x))

    setNewToken((pre: any) => {
      return {
        ...{
          ...pre, tags: [...children.filter((x, index) => arr.includes(index))]
        }
      };
    })
  }

  const plainOptions = ['Spot', 'Margin', 'Future'];

  const onFinish = () => {
    axios.post('http://192.168.50.74:10002/api-svc/api/v1/token', newToken, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2YW5xdXlldHg5N0BnbWFpbC5jb20iLCJleHAiOjE2NDMwMjg2MTMsInVzZXJJZCI6OCwiaWF0IjoxNjQyOTkyNjEzfQ.6QAlPtW8JBu_ZCqKAgBa_VKK13y-NqH9PTb3baGPYE0',
      },
    })
      .then((res: any) => {
        if (res.status === 200) {
          message.success('Added new token!')
        }
        else message.error('Something went wrong!')
      });

  };

  function onChange(checkedValues: any) {
    setNewToken((pre: any) => {
      return { ...{ ...pre, applicableWallets: [...checkedValues] } };
    })
  }
  const props = {
    name: 'avatar',
    action: 'https://deploy-pilot-test.herokuapp.com/image',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        info.fileList[0] ?
          setNewToken((pre: any) => {
            return { ...{ ...pre, icon: info.fileList[0].response } };
          })
          :
          setNewToken((pre: any) => {
            return { ...{ ...pre, icon: '' } };
          })
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  console.log(newToken);
  return <div>
    <Button
      className='btn-add-token'
      icon={<PlusOutlined />}
      color='#f0b90b'
      onClick={() => {
        setIsModalVisible(true)
      }}
    >Add Token</Button>

    <Modal title='Add Token'
      footer={null}
      width={900}
      visible={isModalVisible}
      onCancel={() => {
        setIsModalVisible(false)
      }}>
      <Form
        className="form-add-token"
        {...layout}
        name="nest-messages"
        validateMessages={validateMessages}
      >
        <Form.Item
          name={['user', 'tokenId']}
          label="Token ID"
          rules={[
            {
              required: true,
            },
            {
              min: 2,
              max: 5,
              message: 'Token Id must be between 2 and 5 characters',
            }
          ]}
        >
          <Input onChange={(e) => {
            setNewToken((pre: any) => {
              return { ...{ ...pre, tokenId: e.target.value } };
            })
          }} />
        </Form.Item>

        <Form.Item name={['user', 'description']} label="Description" rules={[
          {
            required: true,
          },
          {
            max: 2000,
            message: 'Description must be less than 2000 characters',
          }
        ]}>
          <Input.TextArea onChange={(e) => {
            setNewToken((pre: any) => {
              return { ...{ ...pre, description: e.target.value } };
            })
          }} />
        </Form.Item>

        <Form.Item name={['user', 'applicableWallets']} label="Applicable wallets" rules={[
          {
            required: true,
          },
        ]}>
          <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
        </Form.Item>

        <Form.Item name={['user', 'icon']} label="Icon" rules={[
          {
            required: true,
          },
        ]}>
          <div
            style={{ display: 'flex', alignItems: 'center' }}>
            <Upload {...props} maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <span style={{ margin: '0 10px' }}>Or</span>
            <Input placeholder='Url' onChange={(e) => {
              setNewToken((pre: any) => {
                return { ...{ ...pre, icon: e.target.value } };
              })
            }}></Input>
          </div>
        </Form.Item>

        <Form.Item name={['user', 'smartContact']} label="Smart Contact" rules={[
          {
            required: true,
          },
        ]}>
          <Input.TextArea onChange={(e) => {
            setNewToken((pre: any) => {
              return { ...{ ...pre, smartContact: e.target.value } };
            })
          }} />
        </Form.Item>

        <Form.Item
          name={['user', 'website']}
          label="Website"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input onChange={(e) => {
            setNewToken((pre: any) => {
              return { ...{ ...pre, website: e.target.value } };
            })
          }} />
        </Form.Item>
        <Form.Item
          name={['user', 'tags']}
          label='Tags'
          rules={[
            {
              required: true,
            },
          ]}>
          <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            onChange={handleTagChange}
          >
            {childrenTags}
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{
          display: 'block', margin: '0 auto',
        }} onClick={onFinish}>
          Add Token
        </Button>
      </Form>
    </Modal >
  </div >
}
