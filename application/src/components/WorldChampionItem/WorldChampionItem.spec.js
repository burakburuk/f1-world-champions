import React from 'react';
import { shallow } from 'enzyme';
import WorldChampionItem from '.';

it('should match with snapshot', () => {
    const wrapper = shallow(<WorldChampionItem />);
    expect(wrapper).toMatchSnapshot();
});
