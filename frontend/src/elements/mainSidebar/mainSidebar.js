import React, {Fragment} from 'react'
import {Col, Row} from 'shards-react'
import classNames from "classnames";


import SidebarMainNavbar from '@/elements/sidebarMainNavbar/sidebarMainNavbar'
import SidebarNavItems from '@/elements/sidebarNavItems/sidebarNavItems.js'


const MainSidebar = () => {
    const classes = classNames(
        "main-sidebar",
        "px-0",
        "col-12",
        "open"
      );

    return (
        <Fragment>
             <Col
                tag="aside"
                className={classes}
                lg={{ size: 3 }}
                md={{ size: 4 }}
            >
             <SidebarMainNavbar/>
             <SidebarNavItems/>
            </Col>
        </Fragment>
    )

}

export default MainSidebar