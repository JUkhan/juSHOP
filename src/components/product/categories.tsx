
import React, { useEffect } from 'react'
import { useSubscriptions } from 'react-ajwah'
import { dispatch } from 'ajwah-store'
import { GetCategories, SelectCategory } from '../../store/actions'
import { Layout, Menu } from 'antd'
import { ICategory, ICategoryState } from '../../store/model';

const { Sider } = Layout;

export function Categories() {
    const { category } = useSubscriptions<{ category: ICategoryState }>(['category'])
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
                    category.data.map((item: ICategory) => <Menu.Item onClick={() => dispatch(SelectCategory, item)} key={item.category_id}>
                        <span className="nav-text">{item.name}</span>
                    </Menu.Item>)
                }
            </Menu>

        </Sider>
    )
}
