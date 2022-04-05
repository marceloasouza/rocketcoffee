import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #000;
  }

  body {
    font-family: 'Manrope', sans-serif;
  }
  
  img {
  display: block;
  max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  p {
  margin: 0px;
}

  ul,
  li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  a {
  text-decoration: none;
}

:root {
  --backgrond: #000;
  --text-color: #FFF;
  --button: #8257E5;
  --border: #29292E;
  --border-menu-mobile: #A8A8B3;
  --text-color-menu-mobile: #E1E1E6;
}
`;

export default GlobalStyle;











