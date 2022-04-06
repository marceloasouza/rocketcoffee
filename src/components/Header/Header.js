import React from 'react';
import logodesk from '../../assets/logo-desktop.svg';
import NavbarComponent from '../Navbar/Navbar';
import { 
  Cabecalho, 
  Container, 
  Logo, TextLogo,
  } from '../Header/Header.styled';
import Button from '../Button/Button';
import MenuMobile from '../MenuMobile/MenuMobile';

const Header = () => {
  return (
    <Cabecalho>
      <Container>
        <Logo>
            <img src={logodesk} alt="Logo" />
            <TextLogo>rocketseat</TextLogo>
        </Logo>
        <NavbarComponent />
          <div>
            <Button />
          </div>
          <MenuMobile />
      </Container>
    </Cabecalho>
  )
}

export default Header;