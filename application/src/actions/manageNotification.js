import * as actionTypes from '../constants';

const manageNotification = {
    show: ({ title, message }) => ({
        type: actionTypes.SHOW_NOTIFICATION,
        title,
        message,
    }),
    close: () => ({
        type: actionTypes.CLOSE_NOTIFICATION,
    }),
};

export default manageNotification;
