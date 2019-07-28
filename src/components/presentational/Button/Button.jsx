
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const classNames = `button ${props.className} ${getColor(props.color)}`;
    return (
        <button
            className={classNames}
            onClick={props.onClick} >
            {props.children}
        </button>
    );
};

function getColor(color) {
    switch (color) {
    case 'primary':
        return 'button-primary';
    case 'disabled':
        return 'button-gray';
    default:
        return 'button-primary';
    }
}

Button.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
};

export default Button;
