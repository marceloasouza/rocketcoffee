import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;

  @media(max-width: 880px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  padding: 10px 0px;
`;


export const NavLink = styled.a`
  color: var(--text-color);
  padding: 0px 30px;
  cursor: pointer;
`;
