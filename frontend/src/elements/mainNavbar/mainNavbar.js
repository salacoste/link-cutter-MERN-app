import React, {Fra} from 'react'
import classNames from "classnames";
import { Container, Navbar } from "shards-react";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';


const NavbarToggle = ({setSidebarOpen, isSidebarOpen}) => {
console.log(setSidebarOpen)
    return (
        <nav className="nav">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={(e)=>{
              e.preventDefault()
              setSidebarOpen(!isSidebarOpen)
          }} className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center">
            <i className="material-icons">
                <MenuOpenIcon/>
            </i>
          </a>
        </nav>
      )

}


const MainNavbar = ({stickyTop, setSidebarOpen, isSidebarOpen, }) => {
    const classes = classNames(
        "main-navbar",
        "bg-white",
        stickyTop && "sticky-top"
      );

    return(
        <div className={classes}>
            <Container className="p-0">
                <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
                {/* <NavbarSearch /> */}
                {/* <NavbarNav /> */}
                <NavbarToggle setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
                </Navbar>
            </Container>
    </div>
    )
}

export default MainNavbar