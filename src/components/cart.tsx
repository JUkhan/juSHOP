import React, { useState } from 'react';
import { List, Button, Row, Col, message } from 'antd';
import { CartItem } from './cartItem';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { useSubscriptions } from 'react-ajwah'
import { LoginRegisterModal } from './loginRegisterModal'
import { ICartState, ICustomerState, IPopup } from '../store/model';

export function shoppingCart({ history }: RouteComponentProps) {

    const { cart, customer } = useSubscriptions<{ cart: ICartState, customer: ICustomerState }>(['cart', 'customer'])
    const [modalConfig] = useState<IPopup>({ visible: false } as IPopup)

    if (modalConfig.visible && customer.accessToken) {

        modalConfig.hide()
        setTimeout(() => {
            checkout(history)
        });
    }

    function show() {
        message.info('Please login first to continue the checkout process.')
        modalConfig.show()
    }

    const header = (<Row>
        <Col style={{ textAlign: 'center' }} span={6}>Item</Col>
        <Col style={{ textAlign: 'center' }} span={6}>Attributes</Col>
        <Col style={{ textAlign: 'center' }} span={6}>Quantity</Col>
        <Col style={{ textAlign: 'center' }} span={6}>Price</Col>
    </Row>);

    const footer = (<Row>
        <Col style={{ textAlign: 'center' }} span={8}>
            <Button size="large" type="primary" shape="round" onClick={() => history.push('/')}>Back to shop</Button>
        </Col>
        <Col offset={8} style={{ textAlign: 'center' }} span={8}>
            <Button size="large" disabled={cart.data.length === 0} type="danger" shape="round" onClick={() => { customer.customer ? checkout(history) : show() }}>Checkout</Button>
        </Col>
    </Row>);

    return (
        <React.Fragment>
            <h3>{cart.data.length} Items in Your Cart</h3>
            <List
                header={header}
                footer={footer}
                itemLayout="vertical"
                size="large"
                dataSource={cart.data}
                renderItem={item => (
                    <List.Item key={item.item_id}>
                        <CartItem item={item} />
                    </List.Item>
                )}
            />
            <LoginRegisterModal config={modalConfig} />
        </React.Fragment>
    );
}

function checkout(history: any) {
    //dispatch(ActionNames.GetCartItems, cartId)
    history.push('/checkout')
}

export const ShoppingCart = withRouter(shoppingCart)