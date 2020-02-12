import React from 'react';
import classes from './Layout.module.css';

const Layout = ({ children }) => (
    <>
        <div>
          Toolbar, SideDrawer, Backdrop
        </div>
        <main className={classes["Content"]}>
            {children}
        </main>
    </>
);

export default Layout;