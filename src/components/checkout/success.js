import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd';
import { getStore } from 'ajwah-store';
import * as ActionNames from '../../store/actions'
import { subscribe } from '../../utils';

function success({ history }) {
    const [cart, setCartState] = useState({ charge: {} })
    useEffect(() => subscribe({ cart: setCartState }), [])

    function back() {
        getStore().dispatch({ type: ActionNames.CartCleanup })
        history.push('/shop')
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Success!</h1>
            <p>Your items will be shipped shortly!</p>
            <p>You will get email details.</p>
            <h1>OrderId:{cart.orderId} </h1>
            <p>{JSON.stringify(cart.charge)}</p>
            <Button onClick={back}>Back to Shop</Button>
        </div>
    )
}

export const Success = withRouter(success)