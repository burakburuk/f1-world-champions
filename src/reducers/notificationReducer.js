import { updateObject, createReducer } from './reducerUtilities';

const handleOpenNotification = (notificationState, action) => (
    updateObject(notificationState, { title: action.title, message: action.message, open: true })
);

const handleCloseNotification = notificationState => (
    updateObject(notificationState, { open: false })
);

// Slice reducer
const notificationReducer = createReducer([], {
    SHOW_NOTIFICATION: handleOpenNotification,
    CLOSE_NOTIFICATION: handleCloseNotification,
});

export default notificationReducer;
