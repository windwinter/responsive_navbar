import React from 'react';
import './sideDrawer.css';

const sideDrawer = props =>{
    let side_drawer_class='side_drawer';
    let backdrop_class=null;
    if(props.sideDrawerOpen){
        side_drawer_class='side_drawer open';
        backdrop_class='backdrop';
    }

    return(
<div>
    <nav className={side_drawer_class}>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul>

    </nav>
    <div className={backdrop_class} onClick={props.click}>

    </div>
</div>
    );
};

export default sideDrawer;