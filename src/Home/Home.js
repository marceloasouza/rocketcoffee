import React from 'react';
import { HomeContainer, Text, PurpleText, Img, TitleMobile, BtnMobile } from './Home.styled';
import coffee from '../assets/rocket-coffee.png';
import Button from '../components/Button/Button';



const Home = () => {
  return (
    <HomeContainer>
      <TitleMobile>
        O Café que fará seu código decolar para o próximo nível.
      </TitleMobile>
      <BtnMobile>
        <Button />
      </BtnMobile>
      <Text>GreatCoffee</Text>
      <PurpleText>{"<"}GreatCode{"/>"}</PurpleText>
      <Img>
        <img src={coffee} alt="" />
      </Img>
    </HomeContainer>
  )
}

export default Home