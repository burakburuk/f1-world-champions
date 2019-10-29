import React from 'react';
import { shallow } from 'enzyme';
import NotificationBox from './';

it('should match with snapshot', () => {
    const wrapper = shallow(
        <NotificationBox
            open={true}
            title="test title"
        />
    );
    expect(wrapper).toMatchSnapshot();
});
