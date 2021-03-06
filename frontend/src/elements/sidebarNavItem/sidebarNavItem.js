import React from 'react'
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";


const SidebarNavItem = ({item, beforeIcon, afterIcon}) => {
    return (
        <NavItem>
            <NavLink tag={RouteNavLink} to={item.to} exact>
            {item.htmlBefore && (
                <div
                className="d-inline-block item-icon-wrapper"
                // dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                >
                    {item.htmlBefore}
                </div>
            )}
            {item.title && <span>{item.title}</span>}
            {item.htmlAfter && (
                <div
                className="d-inline-block item-icon-wrapper"
                dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                />
            )}
            </NavLink>
  </NavItem>
    )
}

export default SidebarNavItem