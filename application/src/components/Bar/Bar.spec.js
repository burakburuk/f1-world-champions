import React from 'react';
import { shallow } from 'enzyme';
import Bar from './';

it('should match with snapshot', () => {
    const wrapper = shallow(<Bar />);
    expect(wrapper).toMatchSnapshot();
});
