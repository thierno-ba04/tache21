import React from 'react';
import { Button } from 'react-bootstrap';
import { ListNested } from 'react-bootstrap-icons';

const Sidebar = () => {
    return (
    <div className='mysidebar'>
<header className='fixed-top'>
<div className="toggle ms-md-3 d-flex gap-3">
    <span><ListNested size={20}/></span>
</div>
<span className='ms-5'><Button /></span>
<div>

</div>
</header>
    </div>
    );
}

export default Sidebar;