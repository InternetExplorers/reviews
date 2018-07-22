import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import * as enzyme from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import ReviewModule from '../ReviewModule.jsx';

enzyme.configure({ adapter: new Adapter() });



describe('ReviewModule testing suite', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ReviewModule />);
  });

  it('should render one <textarea /> component', () => {
    expect(wrapper.find('.mainView').exists()).toEqual(true);
  });
});

describe('ReviewModule testing fetch', () => {
  const wrapper = shallow(<ReviewModule />);

  it('should be a stateful class component', () => {
    expect(wrapper.isInstanceOf(ReviewModule)).toEqual(true);
  });

  // ReviewModule.update();
  // it ('calls the fetch method', () => {
  //   wrapper.instance().fetchReviews = jest.fn();
  //   wrapper.update();
  //   wrapper.instance().fetchReviews();
  //   expect(wrapper.instance().fetchReviews).toBeCalled();
  // });
});
