import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.scss'
import SidebarEtudiant from '../components/SidebarEtudiant'

function LayoutEtudiant() {
    return (
        <div>
            <SidebarEtudiant/>
            <div className='outlet'>
                <Outlet/>
            </div>
        </div>
    )
}

export default LayoutEtudiant;
