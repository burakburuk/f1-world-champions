const notificationSelector = {
    title: state => state.notification.title,
    message: state => state.notification.message,
    open: state => state.notification.open,
};

export default notificationSelector;
