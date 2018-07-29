import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
// import TestUtils from 'react-addons-test-utils';
import * as enzyme from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import TopBar from '../TopBar.jsx';

enzyme.configure({ adapter: new Adapter() });

let app;
let handleTextChangeStub;
let handleStarHoverStub;
let handleMouseLeaveStub;
describe('TopBar testing suite', () => {
  beforeEach(() => {
    handleStarHoverStub = sinon.stub();
    handleTextChangeStub = sinon.stub();
    handleMouseLeaveStub = sinon.stub();
    app = shallow(
      <TopBar
        className="topBar"
        avg={4}
        name="fakename"
        handleTextChange={handleTextChangeStub}
        searchText=""
        handleHover={handleStarHoverStub}
        starVote={[1, 2, 3]}
        greyVote={[4, 5]}
        handleMouseLeave={handleMouseLeaveStub}
      />,
    );
  });
  it('should render one <textarea /> component', () => {
    expect(app.find('.searchBox').exists()).toEqual(true);
  });

  it('should render one <select /> component', () => {
    expect(app.find('.dropDown')).toHaveLength(1);
  });
});
