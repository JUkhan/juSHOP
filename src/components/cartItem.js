import React from 'react';
import * as ActionNames from '../store/actions';
import { dispatch } from 'ajwah-store';
import { Row, Col, List, Button } from 'antd';


export function CartItem(props) {
    const { item } = props;

    return (
        <Row>
            <Col span={8}>

                <List.Item.Meta
                    avatar={<img width={220} alt={item.name} src={'https://backendapi.turing.com/images/products/' + item.thumbnail} />}
                    title={item.name}
                    description={<Button onClick={() => dispatch(ActionNames.RemoveItem, item)} type="danger" icon="close">Remove</Button>}
                />
            </Col>
            <Col span={8}>
                <div className="cart-item-btns">
                    <Button onClick={() => changeQuantity(item, -1)} size="large" shape="circle" icon="minus" />
                    <Button size="large" disabled shape="round">{item.quantity}</Button>
                    <Button onClick={() => changeQuantity(item, 1)} size="large" shape="circle" icon="plus" />

                </div>
            </Col>
            <Col span={8}>
                <div className="cart-price">${Number(item.quantity * Number(item.price)).toFixed(2)}</div>
            </Col>
        </Row>

    );
}

function changeQuantity(item, quantity) {
    dispatch(ActionNames.ChangeQuantity, { item, quantity })
}