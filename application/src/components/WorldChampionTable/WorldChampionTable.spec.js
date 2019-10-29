import React from 'react';
import { shallow } from 'enzyme';
import WorldChampionTable from './';

it('should match with snapshot', () => {
    const wrapper = shallow(<WorldChampionTable />);
    expect(wrapper).toMatchSnapshot();
});
