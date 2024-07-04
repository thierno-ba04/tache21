import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.scss'
import SidebarAdmin from '../components/SidebarAdmin'

function LayoutAdmin() {
    return (
        <div>
            <SidebarAdmin/>
            <div className='outlet'>
                <Outlet/>
            </div>
        </div>
    )
}

export default LayoutAdmin;
