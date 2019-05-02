
import React, { useEffect } from 'react'
import { useSubscriptions } from '../../utils'
import { dispatch } from 'ajwah-store'
import { GetDepartments, SelectDepartment } from '../../store/actions'
import { Menu } from 'antd'



export function Departments() {
    const { department } = useSubscriptions(['department'])
    useEffect(() => { dispatch(GetDepartments) }, [])

    return (
        <Menu theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px', textAlign: 'center' }} >
            {
                department.data.map(item => <Menu.Item onClick={() => dispatch(SelectDepartment, item)} key={item.department_id}>
                    <span className="nav-text">{item.name}</span>
                </Menu.Item>)
            }
        </Menu>


    )
}
