import React from 'react'
import {Button, Checkbox, Form, Input} from 'antd'
import {Flex} from 'reflexbox'
import styles from './Login.module.scss'

const rules = [
  {
    required: true,
    message: 'Required',
  },
]

export const Login: React.FC = () => (
  <Flex marginTop="10vh" justifyContent="center">
    <Form className={styles.form}>
      <Form.Item name="nickname" label="Nickname" rules={rules}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={rules}>
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  </Flex>
)
