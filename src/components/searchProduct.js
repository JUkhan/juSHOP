import React, { useState } from 'react'
import * as ActionNames from '../store/actions'
import { useSubscriptions } from 'react-ajwah'
import { Input, Badge, Icon, Button } from 'antd'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom'
import { dispatch, storeCtx } from 'ajwah-store'

import { LoginRegisterModal } from './loginRegisterModal'

const { Search } = Input;

function searchProduct(props) {

    const { cart, customer } = useSubscriptions(['cart', 'customer'])
    const [modalConfig] = useState({ visible: false })

    if (modalConfig.visible && customer.accessToken) {
        modalConfig.hide();
    }


    function show() {
        modalConfig.show()
    }

    function logOut() {
        storeCtx().importState({})
        props.history.push('/')
        dispatch(ActionNames.GetCategories).dispatch(ActionNames.GetDepartments).dispatch(ActionNames.LoadProducts, {})
    }

    return (
        <React.Fragment>
            <div>
                <Search
                    placeholder="product search..."
                    onInput={e => dispatch(ActionNames.SearchProducts, e.target.value)}
                    style={{ width: 200 }}
                />
                <Link to="/cart" style={{ marginLeft: 10 }}>
                    <Badge count={cart.total}>
                        <Icon style={{ fontSize: 28 }} theme="outlined" type="shopping-cart" />
                    </Badge>
                </Link>
                {customer.accessToken && <span>
                    <span style={{ color: '#fff', paddingLeft: 20 }}><Icon type="user" /> <b style={{ paddingRight: 5 }}>{customer.customer.name} </b></span>
                    <Button type="danger" shape="round" onClick={logOut} style={{ marginTop: 15 }}>Log out</Button>
                </span>}
                {!customer.accessToken && <span style={{ paddingLeft: 20 }}>
                    <Button type="default" shape="round" onClick={show} style={{ marginTop: 15 }}>Log in or Sing up</Button>
                </span>}

            </div>
            <LoginRegisterModal config={modalConfig} />

        </React.Fragment>
    );
}
export const SearchProduct = withRouter(searchProduct)
