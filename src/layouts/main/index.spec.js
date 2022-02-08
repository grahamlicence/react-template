import React from 'react';
import { shallow } from 'enzyme';

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
