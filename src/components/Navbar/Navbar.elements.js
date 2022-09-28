import styled from "styled-components"

export const Container = styled.div`
width:100%;
height:70px;
background-color:#23394d;
`;
export const Wrapper = styled.div`
width:100%;
max-width:1300px;
height:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
margin:auto;
`;
export const LogoContainer = styled.div`
margin-left:0.5rem;
display:flex;
align-items:center;
font-size:1.2rem;
font-family:sans-serif;

p{
    &:nth-child(2){
        font-size:1.3em;
        color:#fff;
    }
    &:nth-child(3){
        font-size:1.4em;
        color:#00FF2F
    }
}
svg{
    fill:#00FF2F;
    margin-right:0.5em;
}

`;
export const Menu = styled.ul`
height:100%;
display:flex;
justufy-content:space-between;
list-style:none;

@media screen and(max-width:960px){
    position:absolute;
    top:70px;
    left:0;
    width:100%;
    weight:90vh;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    trasition:0.5s all ease;
}
`;
export const MenuItem = styled.li`
height:100%
`;
export const MenuItemLink = styled.a`
display:flex;
justify-content:center;
align-items:center;
height:100%;
padding:0.5rem 2.5rem;
color:#00FF2F;
font-family:sans-serif;
font-size:1rem;
font-weight:300;
cursor:pointer;
transition:0.5s all ease;

&:hover{
    color:#fff;
    background-color:#1D2F4D;
    transition:0.5s all ease;
}
`;

export const MenuBurger = styled.div`
display:none;
@media screen and (max-width:960px){
    display:flex;
    align-items:center;
    cursor:pointer;

    svg{
        fill:#00FF2F;
        margin-right:0.5em;
    }
}
`;