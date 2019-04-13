import React, { useState, useEffect } from 'react'
import * as ActionNames from '../store/actions'
import { getStore } from 'ajwah-store'
import { Input, Badge, Icon, Button } from 'antd'
import { subscribe } from '../utils'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom'
const { Search } = Input;

function searchProduct(props) {

    const [cart, setCartState] = useState({})
    const [customer, setCustomerState] = useState({})

    useEffect(() => subscribe({ cart: setCartState, customer: setCustomerState }), [])

    function logOut() {
        getStore().importState({})
        props.history.push('/')
    }

    return (
        <div className="search">
            {customer.user && <div>
                <span><Icon type="user" /> <b style={{ paddingRight: 5 }}>{customer.user.name} </b></span>
                <Search
                    placeholder="product search..."
                    onInput={e => getStore().dispatch({ type: ActionNames.SearchProducts, payload: e.target.value })}
                    style={{ width: 200 }}
                />
                <Link to="/cart" style={{ marginLeft: 10 }}>
                    <Badge count={cart.total}>
                        <Icon style={{ fontSize: 28 }} theme="outlined" type="shopping-cart" />
                    </Badge>
                </Link>
                <Button onClick={logOut} style={{ float: "right", marginTop: 15 }}>Log out</Button>
            </div>}
        </div>
    );
}
export const SearchProduct = withRouter(searchProduct)
