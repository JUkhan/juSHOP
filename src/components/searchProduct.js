import React from 'react'
import * as ActionNames from '../store/actions'
import { useSubscriptions } from '../utils'
import { Input, Badge, Icon, Button } from 'antd'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router-dom'
import { dispatch, storeCtx } from 'ajwah-store'


const { Search } = Input;

function searchProduct(props) {

    const { cart, customer } = useSubscriptions(['cart', 'customer'])

    function logOut() {
        storeCtx().importState({})
        props.history.push('/')
    }

    return (
        <div className="search">
            {customer.customer && <div>
                <span><Icon type="user" /> <b style={{ paddingRight: 5 }}>{customer.customer.name} </b></span>
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
                <Button onClick={logOut} style={{ float: "right", marginTop: 15 }}>Log out</Button>
            </div>}
        </div>
    );
}
export const SearchProduct = withRouter(searchProduct)
