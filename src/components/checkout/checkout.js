import React, { useState } from 'react'
import { Delivery } from './delivery'
import { OrderSummary } from './orderSummery'
import { Success } from './success'
import { Row, Col, Button, Steps } from 'antd'
import { dispatch } from 'ajwah-store'
import * as ActionNames from '../../store/actions'

export function Checkout() {
    let [current, setCurrent] = useState(0)
    const deliveryConfig = { form: null };

    function next() {
        if (current === 0) {
            deliveryConfig.form.validateFields((err, values) => {
                if (!err) {
                    deliveryConfig.data = values;
                    dispatch(ActionNames.DeliveryData, values)
                    if (values.isBiAsDelivery)
                        dispatch(ActionNames.UpdateCustomer)
                    nextStep();
                }
            });
        }
        else nextStep();
    }
    function nextStep() {
        current++
        if (current > 4)
            current = 4
        setCurrent(current);
        if (current === 3) {
            payAndMakeOrders()
        }
    }
    function prev() {
        current--
        if (current < 0)
            current = 0
        setCurrent(current);
    }
    function payAndMakeOrders() {
        dispatch(ActionNames.MakeOrders)
    }
    const content = getContent(current, deliveryConfig)
    return (
        <React.Fragment>
            <Steps current={current}>
                <Steps.Step title="Delivery" />
                <Steps.Step title="Confirmation" />
                <Steps.Step title="Payment" />
                <Steps.Step title="Finish" />
            </Steps>
            <div className="checkout-content">{content}</div>
            {current < 3 && <Row style={{ marginTop: 20, backgroundColor: '#d3d3d3', padding: 20 }}>
                <Col style={{ textAlign: 'center' }} span={6}><Button onClick={prev} disabled={current === 0} type="danger" size="large" shape="round">Back</Button></Col>
                <Col offset={12} style={{ textAlign: 'center' }} span={6}><Button onClick={next} disabled={current === 4} type="danger" size="large" shape="round">{current === 2 ? 'Pay' : 'Next Step'}</Button></Col>
            </Row>}
        </React.Fragment>
    )
}

function getContent(index, deliveryConfig) {
    switch (index) {
        case 0: return <Delivery config={deliveryConfig} />
        case 1: return <OrderSummary />
        case 2: return <div>Payment ui is not implemented, <br /> Used stripeToken:<b>'tok_1EOOKq2eZvKYlo2CnY7WPNiw'</b> </div>
        case 3: return <Success />
        default: return <div>Not Match any step</div>

    }
}
