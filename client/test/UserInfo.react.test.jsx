import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// import TestUtils from 'react-addons-test-utils';
import * as enzyme from 'enzyme';
import React from 'react';
import UserInfo from '../UserInfo.jsx';

enzyme.configure({ adapter: new Adapter() });

let app;
const review = [
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
];
describe('UserInfo testing suite', () => {
  beforeEach(() => {
    app = shallow(
      <UserInfo
        review={review}
        key="1"
      />,
    );
  });
  it('should render one <UserInfo /> component', () => {
    expect(app.find('.UserInfo').exists()).toEqual(true);
  });

});
