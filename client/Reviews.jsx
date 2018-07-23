import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo.jsx';
import TextBox from './TextBox.jsx';

export default class Reviews extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    const { reviews } = this.props;
    return (
      <div>
        {reviews.map(review => (
          <div key={review.id.toString()}>
            <span>
              {<UserInfo className="UserReview" review={[review]} key={review.id.toString()} />}
            </span>
            <span>
              {<TextBox className="TextBox" message={review.message} key={review.id.toString()} />}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
