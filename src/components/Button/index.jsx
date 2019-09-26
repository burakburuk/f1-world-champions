
import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

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
