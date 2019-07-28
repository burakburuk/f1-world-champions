import React from 'react';
import PropTypes from 'prop-types';

const DialogTitle = props => (
    <div className="modal-header">
        <span className="close" onClick={props.onClose}>&times;</span>
        <h2>{props.children}</h2>
    </div>
);

DialogTitle.propTypes = {
    children: PropTypes.string.isRequired,
    onClose: PropTypes.func,
};

export default DialogTitle;
