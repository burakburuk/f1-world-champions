
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    padding: 10px 20px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    color: white;
    background-color: ${props => (props.primary ? '#51a4de' : '#ece9e9')};

    &:hover {
        background-color: ${props => (props.primary ? '#3e82b1' : '')};
    }
`;

const Button = props => (
    <StyledButton
        primary={props.primary}
        onClick={props.onClick} >
        {props.children}
    </StyledButton>
);

Button.propTypes = {
    primary: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
};

export default Button;
