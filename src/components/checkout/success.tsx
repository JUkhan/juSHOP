import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd';
import { dispatch } from 'ajwah-store';
import * as ActionNames from '../../store/actions'

function success({ history }: any) {
    dispatch(ActionNames.CartCleanup)
    function back() {
        history.push('/')
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Success!</h1>
            <p>Your items will be shipped shortly!</p>
            <p>You will get email details.</p>

            <Button type="danger" shape="round" onClick={back}>Back to Shop</Button>
        </div>
    )
}

export const Success = withRouter(success)