import React from 'react';
import logodesk from '../../assets/logo-desktop.svg';
import NavbarComponent from '../Navbar/Navbar';
import { 
  Cabecalho, 
  Container, 
  Logo,
  } from '../Header/Header.styled';
import Button from '../Button/Button';

const Header = () => {
  return (
    <Cabecalho>
      <Container>
        <Logo>
            <img src={logodesk} alt="Logo" />
        </Logo>
        <NavbarComponent />
          <div>
            <Button />
          </div>
      </Container>
    </Cabecalho>
  )
}

export default Header;