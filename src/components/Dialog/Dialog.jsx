import React from 'react';
import PropTypes from 'prop-types';
import StyledDialog from './StyledDialog';

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
