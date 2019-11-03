import { connect } from 'react-redux';
import { manageNotification } from '../../actions';
import NotificationBoxContainer from './NotificationBoxContainer';
import { notificationSelector } from '../../selectors';

const mapStateToProps = state => ({
    open: notificationSelector.open(state),
    title: notificationSelector.title(state),
    message: notificationSelector.message(state),
});

const mapDispatchToProps = dispatch => ({
    onClose: e => dispatch(manageNotification.close(e)),
});

const NotificationBoxConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
)(NotificationBoxContainer);

export default NotificationBoxConnected;