/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Link from '../atoms/Link';
import {names} from '../../helpers/data'

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    height:30%;
    padding: 10px 5px;
`;
const Navigation = () => (

    <Wrapper>
        {names.map(name => <Link  key={name}>{name}</Link>)}

    </Wrapper>

);

export default Navigation;