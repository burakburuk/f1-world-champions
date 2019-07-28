import React from 'react';
import PropTypes from 'prop-types';

const DialogContent = props => (
    <div className="modal-body">
        {props.children}
    </div>
);

DialogContent.propTypes = {
    children: PropTypes.any,
};

export default DialogContent;
