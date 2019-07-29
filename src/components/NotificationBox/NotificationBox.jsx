import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledNotificationBox = styled.div`
    position: fixed; /* Stay in place */
    z-index: 2; /* Sit on top */
    right: 10px;
    bottom: 10px;
    min-height: 50px;
    overflow: hidden;
    color: #D8000C;
    background-color: #FFBABA;
    padding: 12px 30px;
    display: ${props => (props.open ? 'block' : 'none')};
`;

const StyledHeader = styled.div`

    .close {
        float: right;
        font-size: 22px;
        font-weight: bold;
        width: 20px;
        height: 20px;
        background: red;
        color: #FFBABA;
        text-align: center;
        line-height: 22px;
        margin-right: -22px;
        margin-top: -5px;
    }

    .close:hover,
    .close:focus {
        text-decoration: none;
        cursor: pointer;
    }
`;

const NotificationBox = props => (
    <StyledNotificationBox
        open={props.open}>
        <StyledHeader>
            <span
                className='close'
                onClick={props.onClose}>
                &times;
            </span>
            <h2>{props.title}</h2>
        </StyledHeader>
        {props.children}
    </StyledNotificationBox>
);

NotificationBox.propTypes = {
    children: PropTypes.string,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func,
};

export default NotificationBox;
