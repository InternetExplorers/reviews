import React from 'react';
import PropTypes from 'prop-types';

export default function TopBar(props) {
  const { name, handleTextChange, searchText } = props;

  return (
    <div>
      <div>
        Recommended Reviews for
        { ' ' }
        { name }
      </div>
      <div>
        <span className="searchBox">
          <textarea
            onChange={handleTextChange}
            value={searchText}
          />
        </span>
        <span className="dropDown">
          <select>
            <option value="Yelp">
            Yelp Sort
            </option>
            <option value="Newest">
            Newest First
            </option>
            <option value="Oldest">
            Oldest First
            </option>
            <option value="Highest">
            Highest Rated
            </option>
            <option value="Lowest">
            Lowest Rated
            </option>
          </select>
        </span>
        <span className="dropDown">
          <select>
            <option value="Hipster">
            Language: Hipster
            </option>
          </select>
        </span>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  name: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
