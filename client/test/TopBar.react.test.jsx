import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
import * as enzyme from 'enzyme';
import React from 'react';
import TopBar from '../TopBar.jsx';

enzyme.configure({ adapter: new Adapter() });


describe('TopBar testing suite', () => {
  it('should render one <textarea /> component', () => {
    const wrapper = shallow(<TopBar name={'testname'} searchText={'testText'} handleTextChange={function(){}} />);
    expect(wrapper.find('.searchBox').exists()).toEqual(true);
  });

  it('should render two <select /> component', () => {
    const wrapper = shallow(<TopBar name={'testname'} searchText={'testText'} handleTextChange={function(){}} />);
    expect(wrapper.find('.dropDown')).toHaveLength(2);
  });
});
