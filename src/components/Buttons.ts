import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {hoverButton} from './Animations';


export const MenuButton = styled.button`
    width: 300px;
    height:100px;
    padding-top:50px;
    border-radius:50%;
    color:white;
    margin:auto;
    font-weight:bold;
    font-size: 2em;
    border: 1px solid orange;
`;

export const nonstyledLink = styled(Link)`
    text-align: center;
    display:block;
    text-decoration: none;
    background: linear-gradient(-45deg,#272c31,#2c3e50,#2980b9,#89b9da);
    background-size: 400% 400%;
    &:hover{
    animation: ${hoverButton} 1.5s ease infinite ;
    } 
`;
