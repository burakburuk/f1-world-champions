import * as actionTypes from '../constants';

const notification = {
    show: function({ title, message }) {
        return {
            type: actionTypes.SHOW_NOTIFICATION,
            title,
            message,
        };
    },
    close: function() {
        return {
            type: actionTypes.CLOSE_NOTIFICATION,
        }; 
    }
}

export default notification;