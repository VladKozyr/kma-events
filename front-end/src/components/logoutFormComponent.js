import React from 'react'
import {useDispatch} from 'react-redux'
import { Form, Button} from 'antd';
import { useNavigate } from 'react-router-dom';
import {logout} from '../state/loginSlice'
import { select } from '../state/menuSlice';

function LogoutForm(){
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const toLogout = () => {
        dispatch(logout())
        dispatch(select('0'))
        navigate('/')
    }
    return (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={toLogout}
          autoComplete="off"
        >
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <span className="ant-form-text">Are you going to logout?</span>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Process logout
            </Button>
          </Form.Item>
        </Form>
    );
}

export {LogoutForm}