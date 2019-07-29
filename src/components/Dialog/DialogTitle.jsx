import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDialogTitle = styled.div`
    padding: 2px 16px;

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`;

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
