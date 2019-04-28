import React, { useState, useEffect } from 'react'
import { Login } from './login'
import { Register } from './register'
import { SearchProduct } from './searchProduct'
import { Menu, Tabs, Modal, Button } from 'antd'
import { subscriptions } from 'ajwah-store'
import { withRouter, Redirect } from 'react-router-dom'

export function nav(props) {
    const [visible, setVisibleState] = useState(false);
    const [customer, setCustomerState] = useState({})

    useEffect(() => subscriptions({ customer: setCustomerState }), [])

    if (visible && customer.customer) {
        hide()
        return <Redirect to="/shop" />
    }
    else if (customer.customer && props.location.pathname === '/') {
        return <Redirect to="/shop" />
    }

    function show() {
        setVisibleState(true)
    }
    function hide() {
        setVisibleState(false)
    }

    return (
        <React.Fragment>

            <Menu
                theme="dark"
                mode="horizontal"
                style={{ lineHeight: '64px' }}>
                {!customer.customer && <Menu.Item key="2" onClick={show}>Login or Sign up </Menu.Item>}
                <SearchProduct />
            </Menu>
            <Modal title="Login or Sign up"
                footer={<Button onClick={hide}>Close</Button>}
                onCancel={hide} visible={visible}>
                <React.Fragment>
                    {customer.error && <span>{JSON.stringify(customer.error.error.message)}</span>}
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane key="1" tab="Login"><Login /> </Tabs.TabPane>
                        <Tabs.TabPane key="2" tab="Create new accout"><Register /></Tabs.TabPane>
                    </Tabs>
                </React.Fragment>

            </Modal>
        </React.Fragment>
    );
}
export const Nav = withRouter(nav)
