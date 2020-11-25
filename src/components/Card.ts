import styled from 'styled-components';
import {flipedcard} from './Animations';

export const Card = styled.div`
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${props=>props.theme.bg});
    width: 200px;
    height:100%;
    animation: ${(props)=>flipedcard(props.theme.cardurl)} 4s ease ${(props)=>props.theme.delay}s forwards; 
`;