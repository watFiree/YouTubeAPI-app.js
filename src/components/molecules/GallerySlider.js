import React from 'react';
import styled,{css} from 'styled-components';

const Wrapper = styled.div`
    width: 60vw;
    height:50vh;
    color:white;
    display:flex;
    font-size:4rem;
    align-items:center;
    justify-content:center;
    background-color: blue;
    margin-left: 20%;
    position:relative;
    margin-top:50px;
    margin-bottom:70px;
`;

const ButtonWrapper = styled.button`
    position: absolute;
    background-color: ${ ({theme :{ grey }}) => grey};
    border: none;
    opacity: 0.65;
    top:0;
    right:0;
    width:10%;
    height:100%;
    &::before{
        position:absolute;
        content:'';
        width: 0; 
        height: 0; 
        border-top: 40px solid transparent;
        border-bottom: 40px solid transparent;
        border-left: 40px solid white;
        margin-left:-20px;
    }
    &:hover{
        cursor: pointer;
    }

    &:active{
        outline:none;
    }
    ${({ previous }) =>
        previous && css`
            left:0;
    `};

    img{
        opacity:1;
        z-index:2;
        height:20%;
    }
`;




const GallerySlider = () => {

    return(
        <Wrapper>
            <ButtonWrapper/>
            TU KIEDYS BEDZIE GALERIA
            <ButtonWrapper previous/>
        </Wrapper> 
    );
};

export default GallerySlider;