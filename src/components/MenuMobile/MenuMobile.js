import React from 'react'
import { MobileIcon } from './MenuMobile.styled';
import Icon from '../../assets/menu-buguer-open.svg';

const MenuMobile = () => {
  return (
    <MobileIcon>
      <img src={Icon} alt="Menu Hamburger" />
    </MobileIcon>
  )
}

export default MenuMobile