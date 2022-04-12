import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h1`
  width: 29.4375rem;
  height: 6.8125rem;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  text-align: center;
  line-height: 109px;
  letter-spacing: -0.03em;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media(max-width: 880px) {
    width: 350px;
    font-size: 50px;
  }
`;

export const PurpleText = styled.h1`
  width: 34.25rem;
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

  @media(max-width: 880px) {
    width: 21.875rem;
    height: 2.5rem;
    font-size: 50px;
    line-height: 30px;
  }
`;

export const TitleMobile = styled.h2`
  font-size: 1.4rem;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  display: none;
  text-align: center;
  color: var(--text-color);

  @media(max-width: 880px) {
    width: 220px;
    height: 110px;
    display: block;
  }
`;

export const BtnMobile = styled.div`
  display: none;

  @media(max-width: 880px) {
    display: block;
    padding: 50px 0px;
  }
`;

export const Img = styled.div`
  max-width: 100%;
  height: auto;

  img {
    margin-top: 20px;
  }

`;

