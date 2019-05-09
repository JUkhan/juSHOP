import React from 'react';
import * as ActionNames from '../store/actions';
import { dispatch } from 'ajwah-store';
import { Row, Col, List, Button } from 'antd';
import { ICart } from '../store/model'

export function CartItem(props: any) {
    const item: ICart = props.item as ICart;

    return (
        <Row>
            <Col span={6}>

                <List.Item.Meta
                    avatar={<img width={120} alt={item.name} src={'https://backendapi.turing.com/images/products/' + item.thumbnail} />}
                    title={item.name}
                    description={<Button onClick={() => dispatch(ActionNames.RemoveItem, item)} type="danger" icon="close">Remove</Button>}
                />

            </Col>
            <Col span={6}>
                <div className="cart-item-attributes">{twistAttributes(item.attributes)}</div>
            </Col>
            <Col span={6}>
                <div className="cart-item-btns">
                    <Button onClick={() => changeQuantity(item, -1)} size="large" shape="circle" icon="minus" />
                    <Button size="large" disabled shape="round">{item.quantity}</Button>
                    <Button onClick={() => changeQuantity(item, 1)} size="large" shape="circle" icon="plus" />

                </div>
            </Col>
            <Col span={6}>
                <div className="cart-price">${Number(item.quantity * Number(item.price)).toFixed(2)}</div>
            </Col>
        </Row>

    );
}

function changeQuantity(item: ICart, quantity: number) {
    dispatch(ActionNames.ChangeQuantity, { item, quantity })
}

function twistAttributes(attributes: string) {
    var arr = attributes.split(' ')
    return `Color: ${arr[0]}, Size: ${arr[1]}`
}