import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

const  Wrapper = styled.div`
    color: ${ ({theme:{black}}) => black};
    font-size:${ ({theme: {fontSize}}) => fontSize.m};
    display:flex;
    justify-content:center;
    align-items:center;
    text-transform: uppercase;
    transition : all 0.2s ease;
    text-decoration:none;
    &:hover{
        cursor: pointer;
        color: ${ ({theme, hover}) => theme.colors[hover]};
    }
    &.active{
        color: ${ ({theme, hover}) => theme.colors[hover]};
    }
`;

const Link = ({children}) => {
    const data = children.toLowerCase();
    return(
    <Wrapper hover = {data} as={NavLink} to={`/${data}`} >{children === 'minimajk' ? "mini majk" : children}</Wrapper>
)};

Link.propTypes = {
    children : PropTypes.string.isRequired
}

export default Link;