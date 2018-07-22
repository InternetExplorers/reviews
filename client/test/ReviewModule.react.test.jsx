import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import * as enzyme from 'enzyme';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import React from 'react';
import ReviewModule from '../ReviewModule.jsx';

enzyme.configure({ adapter: new Adapter() });

describe('ReviewModule testing suite', () => {
  const {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass,
  } = ReactTestUtils;

  let wrapper;
  let app;

  beforeEach(() => {
    wrapper = shallow(<ReviewModule />);
    app = renderIntoDocument(<ReviewModule />);
  });

  it('should render one <textarea /> component', () => {
    expect(wrapper.find('.mainView').exists()).toEqual(true);
  });

  it('should be a stateful class component', () => {
    expect(React.Component.isPrototypeOf(ReviewModule)).toBe(true);
  });
});
