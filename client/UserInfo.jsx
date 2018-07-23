import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Button } from 'react-bootstrap';

export default function UserInfo(props) {
  const { review } = props;

  const {
    userloc, numfriends, photoloc, numreviews, name,
  } = review[0];

  return (
    <div className="UserInfo">
      <span>
        <img src={photoloc} alt="user's icon" />
      </span>
      <span>
        <div>
          Username: {name}
        </div>
        <div>
          Location: {userloc}
        </div>
        <div>
          Number of friends: {numfriends}
        </div>
        <div>
          Number of reviews: {numreviews}
        </div>
      </span>
    </div>
  );
}

UserInfo.propTypes = {
  review: PropTypes.array.isRequired,

};