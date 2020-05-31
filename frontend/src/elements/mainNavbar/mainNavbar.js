import React, {useState} from 'react'
import classNames from "classnames";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { Link } from "react-router-dom";
import {
  Nav,
  Container,
  Navbar,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
}  from "shards-react";

import './mainNavbar.scss'

const NavbarToggle = ({setSidebarOpen, isSidebarOpen}) => {
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

const NavbarNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Nav navbar className="border-left flex-row">
      <NavItem tag={Dropdown} caret toggle={()=>{
          setOpen(!open)
      }} className="userDropdown">
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3 ">
          <span className="d-none d-md-inline-block">Sierra Brooks</span>
        </DropdownToggle>
      </NavItem>
    </Nav>
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
                <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0 mainNavbar">
                {/* <NavbarSearch /> */}
                <NavbarNav />
                <NavbarToggle setSidebarOpen={setSidebarOpen} isSidebarOpen={isSidebarOpen} />
                </Navbar>
            </Container>
    </div>
    )
}

export default MainNavbar