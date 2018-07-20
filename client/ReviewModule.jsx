import React from 'react';
import TopBar from './TopBar.jsx';
import Reviews from './Reviews.jsx';

export default class ReviewModule extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <TopBar />
        <Reviews />
      </div>
    );
  }
}
