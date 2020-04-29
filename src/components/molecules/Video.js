import React from 'react';
import PropTypes from 'prop-types'
import styled,{keyframes} from 'styled-components';
import ytButton from '../../assets/ytbutton.png'
import Title from '../atoms/Title';

const onEntry = keyframes`
  from {
    transform: translateY(30px);

  }

  to {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    animation: ${onEntry} 1s  0.2s ease ;
`;

const Frame = styled.div`
    width:70vh;
    height:40vh;
    margin: 100px 100px 10px 100px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image: url(${ ({bgImg}) => bgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    transform-style: preserve-3d;
    border: 2px solid black;
    &::before{
        content: ' ';
        position:absolute;
        width:100%;
        height:100%;
        background-color:${ ({theme:{black}}) => black};
        top:7px;
        left:7px;
        transform: translateZ(-1px);
    }
    &:hover{
        cursor: pointer;
    }
    &:hover img{
        transform:scale(1.2);
        opacity:1;
    }
    img{
        transition: all 0.25s ease;
        width:25%;
        opacity:0.8;
    }
`;

const Video = ({children,videoId,src}) => {
    return (
      <Wrapper>
        <a rel="noopener noreferrer" target="_blank" href={`https://www.youtube.com/watch?v=${videoId}`}>
            <Frame bgImg={src} ><img  src={ytButton} alt='play' /></Frame></a>
        <Title size='l'>{children}</Title>
    </Wrapper>
)};

Video.propTypes = {
    children: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}
export default Video;

