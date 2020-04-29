import React,{useContext} from 'react';
import styled from 'styled-components';
import { Link , useLocation} from 'react-router-dom';
import InfoBar from '../atoms/InfoBar';
import Title from '../atoms/Title';
import MyContext from '../../context/index'
import Navigation from '../molecules/Navigation';

const Wrapper = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
`;
const Heading = () => {
  const {newestVideo}= useContext(MyContext);
  const location = useLocation();
  return(
  <Wrapper>

    {location.pathname === '/' && <InfoBar>najnowszy film na kanale {newestVideo} !</InfoBar>}

    <Title size="xxl">
      {' '}
      <Link to="/"> ekipa </Link>
    </Title>

    <Navigation />
  </Wrapper>
)};

export default Heading;
