import React from 'react'
import { Nav } from './Navbar.styled';

const NavbarComponent = () => {
  return (
    <>
        <Nav>
          <li><a href="/home">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/recompensas">Recompensas</a></li>
          <li><a href="/giftcard">GiftCard</a></li>
          <li><a href="/loja">Loja</a></li>
        </Nav>
    </>
  )
}

export default NavbarComponent;