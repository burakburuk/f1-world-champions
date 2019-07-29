import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDialog = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    display: ${props => (props.open ? 'block' : 'none')};
`;

const Dialog = props => (
    <StyledDialog
        open={props.open}>
        {props.children}
    </StyledDialog>
);

Dialog.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool.isRequired,
};

export default Dialog;
