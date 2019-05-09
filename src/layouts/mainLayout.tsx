import React from 'react'
import { Layout, Row, Col } from 'antd'
import { Products, ShoppingCart, Checkout, Categories, Departments, SearchProduct } from '../components'
import { BrowserRouter as Router, Route } from "react-router-dom"
const { Header, Content, Footer } = Layout

export function MainLayout() {

    return (
        <Router>
            <Layout>
                <Categories />
                <Layout style={{ marginLeft: 200 }}> }
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <Row>
                            <Col span={12}><Departments /></Col>
                            <Col span={12}><SearchProduct /></Col>
                        </Row>

                    </Header>
                    <Content className="main-content">
                        <div className="child">
                            <Route path="/" exact component={Products} />
                            <Route path="/cart" exact component={ShoppingCart} />
                            <Route path="/checkout" exact component={Checkout} />
                            <Route path="as" render={() => <h1>Not Authorized</h1>} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Footer</Footer>

                </Layout>
            </Layout>
        </Router>
    )
}

