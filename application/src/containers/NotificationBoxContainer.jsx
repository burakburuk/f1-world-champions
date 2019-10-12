import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationBox from '../components/NotificationBox';
import { closeNotificationBox } from '../actions';

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

const mapStateToProps = state => ({
    open: state.notification.open,
    title: state.notification.title,
    message: state.notification.message,
});

const mapDispatchToProps = dispatch => ({
    onClose: e => dispatch(closeNotificationBox(e)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationBoxContainer);
