import React from 'react';
import './Toolbar.css';
import Drawer from './drawerToggleButton'
const Toolbar = props =>(
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div><Drawer /></div>
            <div className="toolbar__logo"><a href="/">LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>

                </ul>
            </div>
        </nav>
    </header>


);

export default Toolbar;