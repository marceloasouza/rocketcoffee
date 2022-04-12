import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;

  li {
    padding: 10px 0px;
  }
  a {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    color: var(--text-color);
    padding: 0px 30px;
  }

  @media(max-width: 880px) {
   display: none;
  }
`;