import React from 'react';
import PropTypes from 'prop-types';

const Dialog = props => (
    <div className={getClassNames(props.open)}>
        <div className="modal-content">
            {props.children}
        </div>
    </div>
);

function getClassNames(open) {
    return `modal ${open ? 'model-open' : 'model-closed'}`;
}

Dialog.propTypes = {
    children: PropTypes.any,
    open: PropTypes.bool.isRequired,
};

export default Dialog;
