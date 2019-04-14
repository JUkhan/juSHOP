import React, { useEffect, useState } from 'react'
import * as ActionNames from '../store/actions'
import { dispatch, subscriptions } from 'ajwah-store'
import { List, Pagination } from 'antd'
import { ProductItem } from './productItem'



export function Products() {

    const [product, setProductState] = useState({ data: {}, pageNo: 0, limit: 0 })

    useEffect(() => {
        dispatch(ActionNames.LoadProducts, {})
        return subscriptions({ product: setProductState })
    }, [])

    return (
        <React.Fragment>
            <Pagination style={{ marginBottom: 15 }} showSizeChanger onChange={onPageChange} onShowSizeChange={onPageChange} current={product.pageNo} pageSize={product.limit} total={product.data.count} />
            <List
                itemLayout="horizontal"
                loading={product.message ? true : false}
                grid={{
                    gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 3,
                }}
                dataSource={product.data.rows}
                renderItem={item => (
                    <List.Item>
                        <ProductItem product={item}></ProductItem>
                    </List.Item>
                )}
            />
            <Pagination showSizeChanger onChange={onPageChange} onShowSizeChange={onPageChange} current={product.pageNo} pageSize={product.limit} total={product.data.count} />
        </React.Fragment>
    );
}

function onPageChange(pageNo, limit) {
    dispatch(ActionNames.PageChange, { pageNo, limit })
}
