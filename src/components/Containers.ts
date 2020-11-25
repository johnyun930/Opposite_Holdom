import styled from 'styled-components';
export const Container = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(45deg,#e66465, #9198e5);
display: flex;
align-items: center;
flex-direction: column;
justify-content: center; 

`;

export const ItemBox = styled.div`
width: 100%;
height: ${(props)=>props.theme.height};
text-align: center;


`;

export const ButtonBox = styled(ItemBox)`
    display:flex;
    justify-content: center;
    align-items: center;


`;

export const CardBox = styled(ButtonBox)`
    width:90%;
    gap: 20px;
`;