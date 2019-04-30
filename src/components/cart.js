import React from 'react';
import * as ActionNames from '../store/actions';
import { dispatch } from 'ajwah-store';
import { List, Button, Row, Col } from 'antd';
import { CartItem } from './cartItem';
import { withRouter } from 'react-router-dom'
import { useSubscriptions } from '../utils'

export function ShoppingCart(props) {

    const { cart } = useSubscriptions(['cart'])

    const header = <Row>
        <Col style={{ textAlign: 'center' }} span={8}>Item</Col>
        <Col style={{ textAlign: 'center' }} span={8}>Quantity</Col>
        <Col style={{ textAlign: 'center' }} span={8}>Price</Col>
    </Row>

    const Footer = withRouter(({ history }) => (
        <Row>
            <Col style={{ textAlign: 'center' }} span={8}>
                <Button size="large" type="primary" shape="round" onClick={() => history.push('/shop')}>Back to shop</Button>
            </Col>
            <Col offset={8} style={{ textAlign: 'center' }} span={8}>
                <Button size="large" disabled={cart.data.length === 0} type="danger" shape="round" onClick={() => checkout(history, cart.cartId)}>Checkout</Button>
            </Col>
        </Row>))

    return (
        <React.Fragment>
            <h3>{cart.data.length} Items in Your Cart</h3>
            <List
                header={header}
                footer={<Footer />}
                itemLayout="vertical"
                size="large"
                dataSource={cart.data}
                renderItem={item => (
                    <List.Item key={item.item_id}>
                        <CartItem item={item} />
                    </List.Item>
                )}
            />

        </React.Fragment>
    );
}

function checkout(history, cartId) {
    dispatch(ActionNames.GetCartItems, cartId)
    history.push('/checkout')
}