import React from 'react';
import PropTypes from 'prop-types';

const DialogActions = props => (
    <div className="modal-footer">
        {props.children}
    </div>
);

DialogActions.propTypes = {
    children: PropTypes.any,
};

export default DialogActions;
