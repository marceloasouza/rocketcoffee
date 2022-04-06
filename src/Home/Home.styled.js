import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1`
  width: 471px;
  height: 109px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  text-align: center;
  line-height: 109px;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const PurpleText = styled.h1`
  width: 548px;
  height: 109px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 109px;
  text-align: center;
  letter-spacing: -0.03em;
  text-shadow: -1px -1px 0 var(--button), 1px -1px 0 var(--button), 
  -1px 1px 0 var(--button), 1px 1px 0 var(--button);
`;

export const Img = styled.div`
  max-width: 100%;
  height: auto;
  img {
    padding-top: 20px;
  }
`;

