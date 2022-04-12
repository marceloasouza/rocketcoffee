import { MenuContainer, NavContainer } from "./MenuMobile.styled"
import { MdMenu, MdClose } from 'react-icons/md'
import { useState } from "react"

const MenuMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpen = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <button onClick={handleOpen}>
        {openMenu !== true ? <MdMenu size='30' color="#8257E5" /> : <MdClose size='30' color="#8257E5" />}
      </button>
      <MenuContainer className={openMenu !== true ? '' : 'open' }>
        <NavContainer>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/recompensas">Recompensas</a></li>
            <li><a href="/giftcard">GiftCard</a></li>
            <li><a href="/loja">Loja</a></li>
          </ul>
        </NavContainer>
      </MenuContainer>
    </>
  )
}

export default MenuMobile