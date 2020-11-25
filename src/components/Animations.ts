import styled from "styled-components";
import {CardBack} from './CardImage';
import {keyframes} from 'styled-components';

export const hoverButton = keyframes`
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%
    }  
`;

export const flipedcard =(card: any)=> keyframes`
    0%{
        transform: rotateY(0deg);
        background-image: url(${CardBack});

    }
    50%{
        transform: rotateY(90deg);
        background-image: url(${CardBack});

    }

    70%{
        background-image: url(${card});

    }

    100%{
        transform: rotateY(0deg);
        background-image: url(${card});
    }


`;