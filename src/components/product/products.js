import React, { useEffect } from 'react'
import * as ActionNames from '../../store/actions'
import { dispatch } from 'ajwah-store'
import { List, Pagination } from 'antd'
import { ProductItem } from './productItem'
import { useSubscriptions } from 'react-ajwah';



export function Products() {

    const { product } = useSubscriptions(['product'])

    useEffect(() => {
        dispatch(ActionNames.LoadProducts, {})
    }, [])

    return (
        <React.Fragment>
            <Pagination style={{ marginBottom: 15, textAlign: 'center' }} showSizeChanger onChange={onPageChange} onShowSizeChange={onPageChange} current={product.pageNo} pageSize={product.limit} total={product.data.count} />
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
            <Pagination style={{ textAlign: 'center' }} showSizeChanger onChange={onPageChange} onShowSizeChange={onPageChange} current={product.pageNo} pageSize={product.limit} total={product.data.count} />
        </React.Fragment>
    );
}

function onPageChange(pageNo, limit) {
    dispatch(ActionNames.PageChange, { pageNo, limit })
}
