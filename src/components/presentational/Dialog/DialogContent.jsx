import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDialogContent = styled.div`
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: ${props => (props.width || '100%')};
`;

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
