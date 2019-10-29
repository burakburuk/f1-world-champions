import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationBox from '../../components/NotificationBox';

class NotificationBoxContainer extends Component {
    render() {
        const { open, message, title } = this.props;
        
        return (
            <NotificationBox
                open={open}
                title={title}
                onClose={this.handleClose}>
                {message}
            </NotificationBox>
        );
    }

    handleClose = (event) => {
        this.props.onClose(event);
    }
}

NotificationBoxContainer.propTypes = {
    open: PropTypes.bool,
    message: PropTypes.string,
    title: PropTypes.string,
    onClose: PropTypes.func,
};

export default NotificationBoxContainer;