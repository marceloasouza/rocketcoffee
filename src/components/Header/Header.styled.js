import styled from 'styled-components';

export const Cabecalho = styled.div`
  max-width: 100%;
  padding: 20px 0px;
  margin: 0px 10px;
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
    visibility: hidden;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  visibility: visible;
  text-align: end;
  @media(min-width: 880px) {
    visibility: hidden;
  }
`;

export const BtnDesk = styled.div`
  
  @media(max-width: 880px) {
    display: none;
  }
`;










