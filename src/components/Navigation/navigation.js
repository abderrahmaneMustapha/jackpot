import React, { useState } from "react";
import { Nav, NavItem, NavList } from "./navigation.style";

const Navigation = ({ navLinks, activeNavLink, onNavLinkChange }) => {
   
    return (
        <Nav>
            <NavList>
                {navLinks.map((navLink) => (
                    <NavItem
                        key={navLink.key}
                        onClick={() => onNavLinkChange(navLink)}
                        isActive={activeNavLink.key === navLink.key}
                    >
                        {navLink.name}
                    </NavItem>
                ))}
            </NavList>
        </Nav>
    );
};

export default Navigation;
