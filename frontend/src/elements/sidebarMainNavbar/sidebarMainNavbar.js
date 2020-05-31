import React, {Fragment} from 'react'
import { Navbar, NavbarBrand } from "shards-react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom'
import './sidebarMainnavbar.scss'

const SidebarMainNavbar = ({isSidebarOpen, setSidebarOpen}) => {

    return (
        <Fragment>
            <div className="main-navbar">
                <Navbar
                className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
                type="light"
                >  
                    <Link to="/">
                        <span className="logo">
                            Protect Sprayshield
                        </span>
                    </Link>
                    <a
                    className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
                    onClick={(e)=>{
                        e.preventDefault()
                        setSidebarOpen(!isSidebarOpen)
                    }}
                    >
                    <ArrowBackIcon className="mb-3"/>
                    </a>
                </Navbar>
            </div>
        </Fragment>
    )
}

export default SidebarMainNavbar


