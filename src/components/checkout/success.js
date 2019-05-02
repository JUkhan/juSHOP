import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd';
import { dispatch } from 'ajwah-store';
import * as ActionNames from '../../store/actions'
import { useSubscriptions } from '../../utils';


function success({ history }) {
    const { cart } = useSubscriptions(['cart'])
    function back() {
        dispatch(ActionNames.CartCleanup)
        history.push('/')
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Success!</h1>
            <p>Your items will be shipped shortly!</p>
            <p>You will get email details.</p>
            <h1>OrderId:{cart.orderId} </h1>
            <p>{JSON.stringify(cart.charge)}</p>
            <Button type="danger" shape="round" onClick={back}>Back to Shop</Button>
        </div>
    )
}

export const Success = withRouter(success)