import React from 'react';
import { shallow } from 'enzyme';
import WinnersInYearDialog from '.';

it('should match with snapshot', () => {
    const wrapper = shallow(<WinnersInYearDialog />);
    expect(wrapper).toMatchSnapshot();
});
