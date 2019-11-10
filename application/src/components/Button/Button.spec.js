import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';

it('should match with snapshot', () => {
    const wrapper = shallow(<Button>Test button</Button>);
    expect(wrapper).toMatchSnapshot();
});
