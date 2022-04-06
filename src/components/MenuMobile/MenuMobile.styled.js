import styled from 'styled-components';

export const MobileIcon = styled.div`
  width: 30px;
  height: 10px;
  display: none;
  

  @media (max-width: 880px) {
    display: block;
    padding-right: 10px;
  }
`;