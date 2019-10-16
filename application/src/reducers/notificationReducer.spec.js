import notificationReducer from './notificationReducer';
import initialState from './initialState';
import { showNotificationBox, closeNotificationBox } from '../actions';

describe('Given notificiation reducer', () => {
    describe('when reducer called without state', () => {
        it('should return initial state', () => {
            const actual = notificationReducer(undefined, undefined);
            const expected = initialState.notification;
            expect(actual).toEqual(expected);
        });
    });

    describe('when reducer called with show notification action', () => {
        it('should return state with test notification', () => {
            const notification = { title: 'Test', message: 'Test Message' };
            const action = showNotificationBox(notification);
            const actual = notificationReducer(undefined, action);
            expect(actual.title).toEqual(notification.title);
            expect(actual.message).toEqual(notification.message);
        });
    });

    describe('when reducer called with close notification action', () => {
        it('should return initial state', () => {
            const action = closeNotificationBox();
            const actual = notificationReducer(undefined, action);
            const expected = initialState.notification;
            expect(actual).toEqual(expected);
        });
    });
});
