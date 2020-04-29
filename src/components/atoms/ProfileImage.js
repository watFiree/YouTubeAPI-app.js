import styled,{keyframes} from 'styled-components';

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

const ProfileImage = styled.img`
    height: 90%;
    border-radius: 50%;
    border: 5px solid ${ ({theme: {black}}) => black};
    background-image: url(${ ({src}) => src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    animation: ${enter} 1s  ease;
`;

export default ProfileImage;