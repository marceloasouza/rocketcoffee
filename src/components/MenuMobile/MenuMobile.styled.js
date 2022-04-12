import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 250px;
  background: #000;
  padding: 10px;
  z-index: 5;
  transform: translate(-250px);
  transition: all 0.7s;
  
  &.open {
    transform: translate(0);
  }
`;

export const NavContainer = styled.nav`
  ul {
    li {
      padding: 10px 0;
      width: 100%;
      display: block;
      border-bottom: 1px solid #666;
      text-align: center;
      
      &:last-child {
        border: none;
      }
      a {
        color: var(--text-color);
        opacity: 0.6;
      }
    }
  }
`;