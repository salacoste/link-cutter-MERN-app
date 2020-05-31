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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

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
      <NavItem tag={Dropdown} caret toggle={(e)=>{
          console.log('co:', 'event')
          setOpen(!open)
      }} className="userDropdown pl-2">
        <img
            className="user-avatar rounded-circle mr-2"
            src={require("@/app/images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3 ">
          <span className="d-none d-md-inline-block mr-2">Игорь</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={open}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">
              <AssignmentIndIcon fontSize="small" />
              </i> Профиль
          </DropdownItem>
          <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons"><ReceiptIcon fontSize="small"/></i> 
            Реквизиты
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">
              <ExitToAppIcon fontSize="small"/></i> Выйти
          </DropdownItem>
        </Collapse>
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