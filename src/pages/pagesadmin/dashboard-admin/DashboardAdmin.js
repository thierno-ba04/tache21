import React from 'react';
import "../dashboard-admin/dasboardAdmin.css"
import Header from '../hearder/Header';
import SidebarAdmin from '../../../components/SidebarAdmin';
import Home from '../home/Home';

const DashboardAdmin = () => {
    return (
    <div className='grit-container'>
        <Header/>
        <SidebarAdmin/>
        <Home/>
    </div>
);
}


export default DashboardAdmin;