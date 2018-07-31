

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: #ffffff;
  max-width: 650px;
  max-height: 200px;
  padding-top: 0px;
  padding-left: 20px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: red;
  padding-right: 7px;
`;

const SearchText = styled.textarea`
  resize: none;
  height: 24px;
  width: 200px;
  padding-right: 0px;
  font-size: 1em;
`;

const SearchButton = styled.img`
  width: 30px;
  height: 31px;
  padding-left: 0px;
  margin: 0px;
  background-color: red;
  color: white;
  position: relative;
  top: 0px;
`;

const SearchOptions = styled.form`
  // display: flex;
  // align-items: center;
`;

const DropDown = styled.select`
  height: 30px;
  width: 150px;
  margin-left: 50px;
  background-color: #fff;
  border: 0px;
  font-size: 1em;
  position: relative;
  top: -15px;
  left: 30px;
`;

const EmptyRatingBar = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  width: 600px;
  align-items: center;
  justify-content: center;
`;

const RatingBarRightSide = styled.span`
  background-color: #F0F0F0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyUserInfo = styled.span`
  display:flex;
  flex-direction: column;
  width: 300px;
  align-items: left;
  padding-left: 10px;
`;

const RedStar = styled.img`
  width: 35px;
  height: 35px;
`;

const StarsBar = styled.span`
  height: 50px;
  width: 300px;
  display:flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const BlankPhoto = styled.img`
  height: 60px;
  width: 150px;
`;

const StartReview = styled.a`
  padding-bottom: 3px;
  margin-bottom: 3px;
  padding-top: 1px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  `;

const ReviewLocation = styled.span`
  font-size: 0.8em;
  color: black;
  `;

export default class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { searchText } = this.state;
    const { handleSearch } = this.props;
    handleSearch(searchText);
    this.setState({ searchText: '' });
  }

  handleTextChange(e) {
    e.preventDefault();
    const text = e.target.value;
    this.setState({ searchText: text });
  }

  render() {
    const {
      name,
      handleHover,
      greyVote,
      starVote,
      handleMouseLeave,
      handleDropDown,
    } = this.props;

    return (
      <div>
        <Wrapper>
          <Title>
            Recommended Reviews
            <ReviewLocation className="ReviewLocationName">
              { ` for ` }
              { name }
            </ReviewLocation>
          </Title>

          <SearchOptions>
            <SearchText
              className="searchBox"
              type="text"
              onChange={this.handleTextChange}
              value={this.state.searchText}
            />
            <SearchButton
              type="submit"
              onClick={this.handleClick}
              id="reviewSearchButton"
              onSubmit={this.handleClick}
              src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/search.png"
            >
            </SearchButton>

              <span className="dropDown">
                <DropDown onChange={handleDropDown}>
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
                </DropDown>
              </span>

          </SearchOptions>
          <EmptyRatingBar>
            <EmptyUserInfo>
              <BlankPhoto src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/empty.png" alt="user's icon" />
            </EmptyUserInfo>

            <RatingBarRightSide>
              <StarsBar id="stars" onMouseLeave={handleMouseLeave}>
                <div>
                  <span>
                    {starVote.map(number => (
                      <RedStar
                        src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/redStar.png"
                        id={number.toString()}
                        onMouseOver={handleHover}
                        onFocus={handleHover}
                        key={number.toString()}
                      />
                    ))}
                  </span>
                  <span>
                    {greyVote.map(number => (
                      <RedStar
                        src="https://s3-us-west-1.amazonaws.com/yelpclonereviews/photos/greyStar.png"
                        id={number.toString()}
                        onMouseOver={handleHover}
                        onFocus={handleHover}
                        key={number.toString()}
                      />
                    ))}
                  </span>
                </div>
              </StarsBar>
              <hr></hr>
              <div>
                <StartReview href="./linkTest.html">
                  { `Start your review of ${name}` }
                </StartReview>
              </div>
            </RatingBarRightSide>
          </EmptyRatingBar>
        </Wrapper>
      </div>
    );
  }
}

TopBar.propTypes = {
  starVote: PropTypes.arrayOf(PropTypes.number).isRequired,
  greyVote: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  handleDropDown: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};
