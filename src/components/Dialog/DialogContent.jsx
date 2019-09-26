import React from 'react';
import PropTypes from 'prop-types';
import StyledDialogContent from './StyledDialogContent';

const DialogContent = (props) => {
    // eslint-disable-next-line prefer-template
    const width = props.width ? props.width + 'px' : null;
    return (
        <StyledDialogContent
            width={width}>
            {props.children}
        </StyledDialogContent>
    );
};

DialogContent.propTypes = {
    children: PropTypes.any,
    width: PropTypes.number,
};

export default DialogContent;
