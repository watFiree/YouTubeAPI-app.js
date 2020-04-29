import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text =styled.div `
    width:100%;
    height:55%;
    color:${ ({theme: { black }}) => black};
    font-size: ${ ({theme : { fontSize },size}) => size ? fontSize[size] : '4rem'};
    text-transform: uppercase;
    display:flex;
    align-items:center;
    justify-content:center;

    a{
        color:${ ({theme: { black }}) => black};
        text-decoration:none;
    }

`;

const Title = ({children,size}) => {
    return(
    <Text  size={size}>{children}</Text>
)};

Title.propTypes = {
    children : PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    size : PropTypes.string
}

Title.defaultProps = {
    size: '4rem'
}
export default Title;