import React from 'react';
import UserInfo from './UserInfo.jsx';
import TextBox from './TextBox.jsx';

export default class Reviews extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="textBox">
        <span> UserInfo will go here.</span>
        <span> TextBox will go here.</span>
      </div>
    );
  }
}
