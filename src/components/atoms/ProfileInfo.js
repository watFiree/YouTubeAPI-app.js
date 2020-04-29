import React from 'react';
import PropTypes from 'prop-types'
import styled,{keyframes} from 'styled-components';
import {formatNumber} from '../../helpers/formatNumber'

const enter = keyframes`
  from {
    transform: translateY(20%);
    opacity:0;
  }

  to {
    transform: translateY(0);
    opacity:1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-around;
  height:100%;
  width:60%;
  font-size:  ${ ({theme: {fontSize } }) => fontSize.ml};
  animation: ${enter} 1s ease;
`;

const Subscriptions = styled.div`
  display: flex;
  align-items:center;
  img{
      margin-right:5px;
  }
`;
const Followers = styled(Subscriptions)``;

const Name = styled.h1`
   font-size: ${ ({theme: {fontSize } }) => fontSize.xl};
   text-transform:uppercase;
   font-weight: ${ ({theme: { light } }) => light};
`;

const ProfileInfo = ({subs,name}) => (
  <Wrapper>
    <Name size='xl'>{name}</Name>
    <Subscriptions> <img alt='youtube' src="https://img.icons8.com/cotton/64/000000/youtube.png"/> {formatNumber(subs)}</Subscriptions>
    <Followers><img alt='instagram' src="https://img.icons8.com/cotton/64/000000/instagram-new.png"/>1 323 003</Followers>
  </Wrapper>
);

ProfileInfo.propTypes = {
  subs : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name : PropTypes.string.isRequired
}

ProfileInfo.defaultProps = {
  subs: 'NO_DATA'
}
export default ProfileInfo;

