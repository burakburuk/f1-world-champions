import { updateObject, createReducer } from './reducerUtilities';
import initialState from './initialState';

const handleOpenNotification = (notificationState, action) => (
    updateObject(notificationState, { title: action.title, message: action.message, open: true })
);

const handleCloseNotification = notificationState => (
    updateObject(notificationState, { open: false })
);

// Slice reducer
const notificationReducer = createReducer(initialState.notification, {
    SHOW_NOTIFICATION: handleOpenNotification,
    CLOSE_NOTIFICATION: handleCloseNotification,
});

export default notificationReducer;
