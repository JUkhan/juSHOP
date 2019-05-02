import React, { useState } from 'react'
import { Button, Modal, Tabs } from 'antd'
import { Login } from './login'
import { Register } from './register'
import { useSubscriptions } from 'react-ajwah';

export function LoginRegisterModal({ config }) {

    const [visible, setVisibleState] = useState(false)
    const { customer } = useSubscriptions(['customer'])


    function show() {
        setVisibleState(true)
    }
    function hide() {
        setVisibleState(false)
    }
    config.visible = visible;
    config.show = show;
    config.hide = hide;
    console.log(visible)
    return (
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
    );
}

