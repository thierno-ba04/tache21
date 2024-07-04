import React from 'react'
import SidebarCoach from '../components/SidebarCoach'
import { Outlet } from 'react-router-dom'
import './layout.scss'

function LayoutCoach() {
    return (
        <div>
            <SidebarCoach/>
            <div className='outlet'>
                <Outlet/>
            </div>
        </div>
    )
}

export default LayoutCoach
