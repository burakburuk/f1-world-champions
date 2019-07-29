
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    padding: 10px 20px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    color: ${props => (props.primary ? '#51a4de' : '#ffffff')};
    border-width: 1px;
    border-style: solid;
    border-color: ${props => (props.primary ? '#51a4de' : '#ece9e9')};
    background-color: ${props => (props.primary ? '#ffffff' : '#ece9e9')};

    &:hover {
        background-color: ${props => (props.primary ? '#3e82b1' : '')};
        color: #ffffff;
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
