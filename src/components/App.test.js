import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('App test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
