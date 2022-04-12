import React from 'react';
import logodesk from '../../assets/logo-desktop.svg';
import logomobile from '../../assets/logo-mobile.svg';
import NavbarComponent from '../Navbar/Navbar';
import { 
    Container,
    Cabecalho,
    Logo,
    Menu, 
    BtnDesk
  } from '../Header/Header.styled';
import Button from '../Button/Button';
import MenuMobile from '../MenuMobile/MenuMobile';


const Header = () => {
  return (
    <>
      <Cabecalho>
        <Menu>
          <img src={logomobile} alt="LogoMobile" />
          <MenuMobile />
        </Menu>
        <Container>
          <Logo>
            <img src={logodesk} alt="Logo" />
          </Logo>
          <NavbarComponent />
          <BtnDesk>
            <Button />
          </BtnDesk>
        </Container>
      </Cabecalho>
    </>
  )
}

export default Header;