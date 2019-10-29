import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import App from './';

const mockStore = configureStore();
const store = mockStore();

it('should match with snapshot', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper).toMatchSnapshot();
});
