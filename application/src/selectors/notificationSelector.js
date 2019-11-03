const notificationSelector = {
    title: function(state) {
        return state.notification.title;
    },
    message: function(state) {
        return state.notification.message;
    },
    open: function(state) {
        return state.notification.open;
    },
};

export default notificationSelector;
