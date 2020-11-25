import React from 'react';
import styled from 'styled-components';
import {MenuButton,nonstyledLink} from '../components/Buttons';
import {cardArray,CardBack} from '../components/CardImage';
import {ItemBox,CardBox,ButtonBox,Container} from '../components/Containers';
import {Card} from '../components/Card';


const Title = styled.h1`
    font-size: 5em;
    padding-top: 30px;
    font-weight: bold;
    color:#34495e;
`;
const makeRandnum = () :number[]=>{
    let numarray: number[] = [];
    for(let i=0; i<3; i++){
       numarray.push(Math.floor(Math.random()*10));
    }
    return numarray;
}
export const MainPage: React.FC = ()=>{
    const random: number[] = makeRandnum();
    let delayTime: number = 3.5;

    
    return(
        <Container>
            <ItemBox theme={{height:"25%"}}>
            <Title>Opposite Holdom</Title>
            </ItemBox>
            <CardBox theme={{height:"40%"}}>
                <Card theme={{bg: CardBack,cardurl:cardArray[random[0]],delay:0}}></Card>
                <Card theme={{bg: CardBack,cardurl:cardArray[random[1]],delay:delayTime}}></Card>
                <Card theme={{bg: CardBack,cardurl:cardArray[random[2]],delay:delayTime*2}}></Card>

            </CardBox>
            <ButtonBox theme= {{height: "30%"}}>
            <MenuButton as = {nonstyledLink} to="/single">1.Single Play</MenuButton>
            <MenuButton as = {nonstyledLink} to="/login">2.Multi play</MenuButton>
            <MenuButton as = {nonstyledLink} to="/how">3.How to play</MenuButton>
            </ButtonBox>
           </Container>

    )
}