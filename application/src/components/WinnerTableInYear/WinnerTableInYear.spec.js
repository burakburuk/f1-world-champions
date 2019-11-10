import React from 'react';
import { shallow } from 'enzyme';
import WinnerTableInYear from '.';

it('should match with snapshot', () => {
    const wrapper = shallow(<WinnerTableInYear />);
    expect(wrapper).toMatchSnapshot();
});
