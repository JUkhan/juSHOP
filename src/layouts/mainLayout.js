import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { Products, ShoppingCart, Checkout, Home, Nav } from '../components'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { subscribe } from '../utils';

const { Header, Content, Footer } = Layout

export function MainLayout() {

    const [customer, setCustomerState] = useState({})
    useEffect(() => subscribe({ customer: setCustomerState }), [])

    return (
        <Router>
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo">juSHOP</div>
                    <Nav />
                </Header>
                <Content style={{ padding: '0 50px', marginTop: 100 }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
                        <Route path="/" exact component={Home} />
                        {customer.user && <React.Fragment>
                            <Route path="/shop" exact component={Products} />
                            <Route path="/cart" exact component={ShoppingCart} />
                            <Route path="/checkout" exact component={Checkout} />
                        </React.Fragment>}
                        <Route path="as" render={() => <h1>Not Authorized</h1>} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Footer
                </Footer>

            </Layout>

        </Router>
    )
}

