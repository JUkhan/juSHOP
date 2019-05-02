
import React, { useEffect } from 'react'
import { useSubscriptions } from '../../utils'
import { dispatch } from 'ajwah-store'
import { GetCategories, SelectCategory } from '../../store/actions'
import { Layout, Menu } from 'antd'

const { Sider } = Layout;

export function Categories() {
    const { category } = useSubscriptions(['category'])
    useEffect(() => { dispatch(GetCategories) }, [])

    return (
        <Sider style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
        }}
        >
            <div className="logo">juSHOP</div>
            <div className="categories">Categories</div>

            <Menu theme="dark" mode="inline" >
                {
                    category.data.map(item => <Menu.Item onClick={() => dispatch(SelectCategory, item)} key={item.category_id}>
                        <span className="nav-text">{item.name}</span>
                    </Menu.Item>)
                }
            </Menu>

        </Sider>
    )
}
