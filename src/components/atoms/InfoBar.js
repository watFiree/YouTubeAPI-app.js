import React from 'react';
import PropTypes from 'prop-types'
import styled,{css} from 'styled-components';


const Wrapper = styled.div`
    background-color:${ ({theme: { black}}) => black};
    color:${ ({theme: {white}}) => white};
    height:15%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: ${ ({theme: {fontSize}}) => fontSize.s};
    text-transform:uppercase;
    ${({ footer }) =>
    footer && css`
        justify-content: space-between;
        padding: 6px 50px 6px 50px;
        margin-top: 100px;
    `};
`;
const InfoBar = ({children,footer}) => (
    <Wrapper footer={footer}>{children}</Wrapper>
);

InfoBar.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array,PropTypes.element]),
    footer: PropTypes.bool
}

InfoBar.defaultProps = {
    children: 'NO_DATA',
    footer : false
}
export default InfoBar;