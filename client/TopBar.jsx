import React from 'react';
import PropTypes from 'prop-types';

export default class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      hovered: 0,
      grey: [],
      clicked: false,
    };
  }

  render() {
    const {
      name,
      handleTextChange,
      searchText,
      handleHover,
      greyVote,
      starVote,
      handleMouseLeave,
    } = this.props;

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
        <span id="stars" onMouseLeave={handleMouseLeave}>
          <span>
            {starVote.map(number => (
              <i
                className="far fa-star fa-3x"
                style={{ color: 'red' }}
                id={number.toString()}
                onMouseOver={handleHover}
                onFocus={handleHover}
                key={number.toString()}
              />
            ))}
          </span>
          <span>
            {greyVote.map(number => (
              <i
                className = "far fa-star fa-3x"
                style ={ { color: 'grey' } }
                id = { number.toString() }
                onMouseOver = { handleHover }
                onFocus = { handleHover }
                key = { number.toString() }
              />
            ))}
          </span>
        </span>
      </div>
    );
  }
}

TopBar.propTypes = {
  starVote: PropTypes.arrayOf(PropTypes.number).isRequired,
  greyVote: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};
