import React from 'react';
import { shallow } from 'enzyme';
import WinnerItemInYear from '.';

it('should match with snapshot', () => {
    const wrapper = shallow(<WinnerItemInYear />);
    expect(wrapper).toMatchSnapshot();
});
