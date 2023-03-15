import React from 'react'
import { useSelector, useDispatch, connect} from 'react-redux'
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import {login, logout} from '../state/loginSlice'

function LoginForm({isLogin}){
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const toLogin = (values) => {
        console.log(values)
        dispatch(login())
        navigate('/')
    }
    return (
      <div style={{display: 'flex',
        justifyContent: 'center'}}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={toLogin}
          onFinishFailed={() => dispatch(logout())}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Пошта"
            name="username"
            rules={[{ required: true, message: 'Будь ласка, введіть пошту!' }]}
          >
            <Input onChange={(e) => {form.setFieldValue({username: e.target.value})}} />
          </Form.Item>
    
          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Будь ласка, введіть пароль!' }]}
          >
            <Input.Password onChange={(e) => {form.setFieldValue({password: e.target.value})}}/>
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Авторизуватись
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
}

export {LoginForm}