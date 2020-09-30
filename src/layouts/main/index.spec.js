import React from 'react';
const { shallow } = require('enzyme');

import Main from './';

describe('<Main />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Main />);
  });

  it('renders correctly', () => {
    expect(component.text()).toBe('main content');
  });
});
