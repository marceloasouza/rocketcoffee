import styled from 'styled-components';

export const Cabecalho = styled.div`
  max-width: 100%;
  padding: 50px 0px;
`;

export const Container = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.div`
  width: 45px;
  height: 50px;

  @media (max-width: 880px) {
    padding-left: 10px;
    display: flex;
  }
`;

export const TextLogo = styled.h2`
  display: none;
  font-family: 'Manrope', sans-serif;
  align-self: center;
  font-size: 18px;
  padding-left: 10px;
  color: var(--text-color);

  @media (max-width: 880px) {
    display: block;
  }
`;









