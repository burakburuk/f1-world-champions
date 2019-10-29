import React from 'react';
import PropTypes from 'prop-types';
import StyledNotificationBox from './StyledNotificationBox';
import StyledHeader from './StyledHeader';

const NotificationBox = props => (
    <StyledNotificationBox
        data-id="notification"
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
