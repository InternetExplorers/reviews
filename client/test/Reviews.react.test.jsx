import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import enzyme from 'enzyme';
import React from 'react';
import Reviews from '../Reviews.jsx';
import sinon from 'sinon';

enzyme.configure({ adapter: new Adapter() });


describe('Reviews testing suite', () => {
  it('should render one <textarea /> component', () => {
    const wrapper = shallow(<Reviews reviews={[
      {
        locname: 'Intial',
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
    ]}
    />);
    expect(wrapper.find('.TextBox').exists()).toEqual(true);
  });
});
