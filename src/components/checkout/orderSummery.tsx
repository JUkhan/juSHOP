import React from 'react'
import { Row, Col, Table } from 'antd'
import { useSubscriptions } from 'react-ajwah';

export function OrderSummary(props: any) {

    const { delivery, cart } = useSubscriptions(['delivery', 'cart'])

    const columns = [{
        title: 'Item',
        dataIndex: 'name',
        key: 'product_id'
    }, {
        title: 'Qty',
        dataIndex: 'quantity',
        key: 'qty',
    }, {
        title: 'Price',
        dataIndex: 'subtotal',
        key: 'subtotal',
        render: (val: any) => <span style={{ color: 'red' }}>${val}</span>
    }]
    const cartData = cart.data.map((item: any) => {
        item.key = item.item_id;
        return item;
    })

    function grandtotal(data: any, deliveryOption: any) {
        cart.grandTotal = subtotal(data) + (deliveryOption === 1 ? 0 : 15);
        return cart.grandTotal;
    }

    return (
        <React.Fragment>
            <h1>Order Summary</h1>
            <Row>
                <Col span={16}>
                    <Table pagination={false} columns={columns} dataSource={cartData} />
                    <Row style={{ marginTop: 15, textAlign: "center" }}>
                        <Col span={8}>
                            <h1>Subtotal</h1>
                            ${subtotal(cart.data)}
                        </Col>
                        <Col span={8}>
                            <h1>Shipping</h1>
                            {delivery.deliveryOption === 1 ? 'free' : '$15'}
                        </Col>
                        <Col span={8}>
                            <h1>Grandtotal</h1>
                            ${grandtotal(cart.data, delivery.deliveryOption)}
                        </Col>
                    </Row>
                </Col>
                <Col offset={2} span={6}>
                    <h1>Address</h1>
                    <p>{`${delivery.address}`}</p>
                    <p>{`${delivery.state}, ${delivery.city}`}</p>
                    <h1>Delivery Options</h1>
                    <p>{delivery.deliveryOption === 1 ? 'Standard shipping: (free, 2-3 business days)' : 'Express shipping: ($15, 1-2 business days)'}</p>
                </Col>
            </Row>
        </React.Fragment>
    )
}

function subtotal(data: any[]) {
    return data.reduce((sum: number, item: any) => sum + (+item.subtotal), 0)
}
