import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Button } from 'react-bootstrap';

export default function TextBox(props) {
  const { message } = props;
  return (
    <div className="Message">
      {message}
    </div>
  );
}

TextBox.propTypes = {
  message: PropTypes.string.isRequired,
};
