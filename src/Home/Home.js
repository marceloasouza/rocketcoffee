import React from 'react';
import { HomeContainer, Text, PurpleText, Img } from './Home.styled';
import coffee from '../assets/rocket-coffee.png';

const Home = () => {
  return (
    <HomeContainer>
      <Text>GreatCoffee</Text>
      <PurpleText>{"<"}GreatCode{"/>"}</PurpleText>
      <Img>
        <img src={coffee} alt="" />
      </Img>
    </HomeContainer>
  )
}

export default Home