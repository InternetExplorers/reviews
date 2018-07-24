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
  // const {
  //   Simulate,
  //   renderIntoDocument,
  //   findRenderedDOMComponentWithClass,
  //   scryRenderedDOMComponentsWithClass,
  // } = ReactTestUtils;

  let wrapper;
  // let app;

  beforeEach(() => {
    wrapper = shallow(<ReviewModule />);
    // app = renderIntoDocument(<ReviewModule />);
  });

  describe('ReviewModule Testing Suite', () => {

    it('should render one <textarea /> component', () => {
      expect(wrapper.find('.mainView').exists()).toEqual(true);
    });

    it('should be a stateful class component', () => {
      expect(React.Component.isPrototypeOf(ReviewModule)).toBe(true);
    });

    it('should store the number of stars sent from TopBar to state', (done) => {
      wrapper.instance().handleStateChanges = jest.fn();
      wrapper.instance().handleStarHover({ target: { id: '2' }, preventDefault: () => {} });
      done();
      expect(wrapper.instance().handleStateChanges).toBeCalledWith(
        { redVote: [1, 2], greyVote: [3, 4, 5] },
      );
    });

    it('should call handleStateChanges with all grey stars when the mouse leaves the stars field', (done) => {
      wrapper.instance().handleStateChanges = jest.fn();
      wrapper.instance().handleMouseLeave();
      done();
      expect(wrapper.instance().handleStateChanges).toBeCalledWith(
        { redVote: [], greyVote: [1, 2, 3, 4, 5] },
      );
    });

    it('should update state appropriately using handleStateChanges', (done) => {
      wrapper.instance().handleStateChanges({ testing: 'State was updated' });
      wrapper.instance().handleStateChanges({ aNumberToTest: 5 });
      done();
      expect(wrapper.state('testing')).toEqual('State was updated');
      expect(wrapper.state('aNumberToTest')).toEqual(5);
    });

    it('should average the number of stars and call handleStateChanges with the mean', (done) => {
      wrapper.instance().handleStateChanges = jest.fn();
      wrapper.instance().avgStars(
        [
          {
            locname: 'Test',
            stars: 3,
            id: 1,
            posted: '2018-12-25',
            username: 'Tim, the user',
            userloc: 'San Francisco, CA',
            numfriends: 15,
            photoLoc: './photos/p1.jpg',
            numreviews: 5,
            message: 'Here is a review.  The text is long!',
          },
          {
            locname: 'Test',
            stars: 5,
            id: 1,
            posted: '2017-02-22',
            username: 'Bill, the user',
            userloc: 'San Francisco, CA',
            numfriends: 1,
            photoLoc: './photos/p1.jpg',
            numreviews: 1,
            message: 'Here is a review.  The text is longer!',
          },
        ],
      );
      done();
      expect(wrapper.instance().handleStateChanges).toBeCalledWith({ avgStars: 4 });
    });
  });
});
