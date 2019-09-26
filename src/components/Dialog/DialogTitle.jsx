import React from 'react';
import PropTypes from 'prop-types';
import StyledDialogTitle from './StyledDialogTitle';

const DialogTitle = props => (
    <StyledDialogTitle>
        <span
            className='close'
            onClick={props.onClose}>
            &times;
        </span>
        <h2>{props.children}</h2>
    </StyledDialogTitle>
);

DialogTitle.propTypes = {
    children: PropTypes.string.isRequired,
    onClose: PropTypes.func,
};

export default DialogTitle;
