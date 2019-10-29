import React from 'react';
import { shallow } from 'enzyme';
import NotificationBox from '../../components/NotificationBox';
import NotificationBoxContainer from './NotificationBoxContainer';

describe('Given a NotificationBoxContainer component', () => {
    let wrapper = null;

    const open = true;
    const message = 'test message';
    const title = 'test title';
    const onClose = jest.fn();

    beforeEach(() => {    
        onClose.mockClear();

        wrapper = shallow(
            <NotificationBoxContainer
                open={open}
                title={title}
                onClose={onClose}
            >
                {message}
            </NotificationBoxContainer>
        );
    });

    describe('when rendering', () => {
        it('should have an open property defined', () => {
            expect(wrapper.props().open).toBe(true);
        });
        it('should have a title property defined', () => {
            expect(wrapper.props().title).toEqual(title);
        });
        it('should have an onClose function defined', () => {
            expect(wrapper.props().onClose).toBeDefined();
        });
    });

    describe('when notification closed', () => {
        it('should call onClose', () => {
            wrapper.find(NotificationBox).props().onClose();
            expect(onClose).toHaveBeenCalledTimes(1);
        });
    });
});