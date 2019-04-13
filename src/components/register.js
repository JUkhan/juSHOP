import React, { useState } from 'react';
import * as ActionNames from '../store/actions';
import { Form, Input, Button } from 'antd';
import { getStore } from 'ajwah-store';

function register(props) {
    var [state, setState] = useState({ confirmDirty: false });

    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                getStore().dispatch({ type: ActionNames.Register, payload: values })
            }
        });

    }
    function handleConfirmBlur(e) {
        const value = e.target.value;
        setState({ confirmDirty: state.confirmDirty || !!value });
    }

    function compareToFirstPassword(rule, value, callback) {
        const form = props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    function validateToNextPassword(rule, value, callback) {
        const form = props.form;
        if (value && state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    const { getFieldDecorator } = props.form;
    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 14 },
    }
    return (
        <Form onSubmit={handleSubmit} form>
            <Form.Item label="User Name" {...formItemLayout}>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input placeholder="Username" />
                )}
            </Form.Item>
            <Form.Item label="Email" {...formItemLayout}>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                })(
                    <Input type="email" placeholder="Email" />
                )}
            </Form.Item>
            <Form.Item label="Password" {...formItemLayout}>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }, { validator: validateToNextPassword }],
                })(
                    <Input type="password" placeholder="Password" />
                )}
            </Form.Item>
            <Form.Item label="Confirm Password" {...formItemLayout}>
                {getFieldDecorator('cpassword', {
                    rules: [{ required: true, message: 'Please confirm your password!' }, { validator: compareToFirstPassword }],
                })(
                    <Input onBlur={handleConfirmBlur} type="password" placeholder="Confirm Password" />
                )}
            </Form.Item>
            <Form.Item>

                <Button type="primary" htmlType="submit" className="login-form-button">
                    Create new account
                </Button>

            </Form.Item>
        </Form>
    );
}

export const Register = Form.create({ name: 'normal_register' })(register);