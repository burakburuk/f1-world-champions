import { connect } from 'react-redux';
import { closeNotificationBox } from '../../actions';
import NotificationBoxContainer from './NotificationBoxContainer';

const mapStateToProps = state => ({
    open: state.notification.open,
    title: state.notification.title,
    message: state.notification.message,
});

const mapDispatchToProps = dispatch => ({
    onClose: e => dispatch(closeNotificationBox(e)),
});

const NotificationBoxConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationBoxContainer);

export default NotificationBoxConnected;