import * as actionTypes from '../constants';

export function showNotificationBox({ title, message }) {
    return {
        type: actionTypes.SHOW_NOTIFICATION,
        title,
        message,
    };
}

export function closeNotificationBox() {
    return {
        type: actionTypes.CLOSE_NOTIFICATION,
    };
}
