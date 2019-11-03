import { connect } from 'react-redux';
import { manageNotification } from '../../actions';
import NotificationBoxContainer from './NotificationBoxContainer';

const mapStateToProps = state => ({
    open: state.notification.open,
    title: state.notification.title,
    message: state.notification.message,
});

const mapDispatchToProps = dispatch => ({
    onClose: e => dispatch(manageNotification.close(e)),
});

const NotificationBoxConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationBoxContainer);

export default NotificationBoxConnected;