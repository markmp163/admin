import { Button, Input } from 'antd';
import Form from 'antd/lib/form/Form';
import Item from 'antd/lib/list/Item';
import Modal from 'antd/lib/modal/Modal';
import LayoutHome from 'components/Layouts/LayoutHome';
import React, { useState } from 'react';

export default function AddPairCoin() {
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

  const [isModalAddPairCoinVisible, setIsModalAddPairCoinVisible] = useState(false)
  return (
    <LayoutHome>
      <Button onClick={() => setIsModalAddPairCoinVisible(true)}>Add Pair Coin</Button>

      <Modal title='Add Pair Coin'
        visible={isModalAddPairCoinVisible}
        onCancel={() => setIsModalAddPairCoinVisible(false)}
        footer={null}>

        <Form {...layout}
          name="nest-messages"
          validateMessages={validateMessages}>
        </Form>
      </Modal>
    </LayoutHome>
  );
}
