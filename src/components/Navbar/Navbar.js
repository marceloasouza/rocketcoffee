import React from 'react'

import { NavList, NavLink, NavItem } from './Navbar.styled';

const NavbarComponent = () => {
  return (
    <>
        <NavList>
          <NavLink>
            <NavItem to="/">Home</NavItem>
          </NavLink>
          <NavLink>
            <NavItem to="/menu">Menu</NavItem>
          </NavLink>
          <NavLink>
            <NavItem to="/recompensas">Recompensas</NavItem>
          </NavLink>
          <NavLink>
            <NavItem to="/giftcard">Gift Card</NavItem>
          </NavLink>
          <NavLink>
            <NavItem to="/loja">Loja</NavItem>
          </NavLink>
        </NavList>
    </>
  )
}

export default NavbarComponent;