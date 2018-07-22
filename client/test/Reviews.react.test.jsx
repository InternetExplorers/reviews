import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import enzyme from 'enzyme';
import React from 'react';
import Reviews from '../Reviews.jsx';
import sinon from 'sinon';

enzyme.configure({ adapter: new Adapter() });


describe('TopBar testing suite', () => {
  it('should render one <textarea /> component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find('.textBox').exists()).toEqual(true);
  });
});
