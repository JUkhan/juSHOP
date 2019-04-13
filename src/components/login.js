import React from 'react'
import * as ActionNames from '../store/actions'
import { Form, Icon, Input, Button } from 'antd'
import { dispatch } from 'ajwah-store'


function login(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                dispatch(ActionNames.Login, values)
            }
        });

    }
    const { getFieldDecorator } = props.form;
    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
            </Form.Item>
            <Form.Item>

                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
          </Button>

            </Form.Item>
        </Form>
    );
}

export const Login = Form.create({ name: 'normal_login' })(login);

