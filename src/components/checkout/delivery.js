import React, { useEffect } from 'react'

import { Row, Col, Form, Input, Checkbox, Radio } from 'antd'
import { getStore } from 'ajwah-store'


function delivery(props) {

    useEffect(() => {
        const sub = getStore().select('delivery').subscribe(data => props.form.setFieldsValue(data))
        return () => sub.unsubscribe()
    }, [])
    props.config.form = props.form
    const { getFieldDecorator } = props.form

    return (
        <Form>
            <Row>
                <Col span={8}>
                    <Form.Item label="First Name">
                        {getFieldDecorator('firstName', {
                            rules: [{ required: true, message: 'Please input your first name!' }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                </Col>
                <Col span={8} offset={2}>
                    <Form.Item label="Last Name">
                        {getFieldDecorator('lastName', {
                            rules: [{ required: true, message: 'Please input your last name!' }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Form.Item label="Address">
                        {getFieldDecorator('address', {
                            rules: [{ required: true, message: 'Please input your faddress!' }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                </Col>
                <Col span={8} offset={2}>
                    <Form.Item label="City">
                        {getFieldDecorator('city', {
                            rules: [{ required: true, message: 'Please input your city!' }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Form.Item label="State">
                        {getFieldDecorator('state', {
                            rules: [{ required: true, message: 'Please input your state!' }],
                        })(
                            <Input />
                        )}
                    </Form.Item>
                </Col>
                <Col span={8} offset={2}>
                    <Form.Item label="ZIP Code">
                        {getFieldDecorator('zipCode', {
                            rules: [{ required: true, message: 'Please input your ZIP code!' }],
                        })(
                            <Input type="number" />
                        )}
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                {getFieldDecorator('isBiAsDelivery', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>My billing information is the same as my delivery information</Checkbox>
                )}
            </Form.Item>
            <Form.Item>
                <h1>Delivery Options:</h1>
                {getFieldDecorator('deliveryOption', {
                    valuePropName: 'value',
                    initialValue: 1,
                })(
                    <Radio.Group>
                        <Radio value={1}><b>Standard shipping: </b>(free, 2-3 business days)</Radio>
                        <Radio value={2}><b>Express shipping: </b>($15, 1-2 business days)</Radio>
                    </Radio.Group>)}
            </Form.Item>
        </Form>
    )
}

export const Delivery = Form.create({ name: 'deliveryForm' })(delivery);

