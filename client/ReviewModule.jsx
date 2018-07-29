import React from 'react';
import $ from 'jquery';
import TopBar from './TopBar.jsx';
import Reviews from './Reviews.jsx';

export default class ReviewModule extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      redVote: [],
      greyVote: [1, 2, 3, 4, 5],
      reviews: [
        {
          locname: 'Intial',
          stars: 3,
          id: 1,
          posted: '2018-12-25',
          username: 'Tim, the user',
          userloc: 'San Francisco, CA',
          numfriends: 15,
          photoLoc: './photos/p1.jpg',
          numreviews: 5,
          message: 'Here is a review.  The text is long!',
        },
      ],
      avgStars: 0,
    };
    this.avgStars = this.avgStars.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleStarHover = this.handleStarHover.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    const randomReview = Math.ceil(Math.random() * 100);
    this.fetchReviews(randomReview);
  }

  fetchReviews(restaurantID) {
    $.ajax({
      type: 'GET',
      url: `/locations/${restaurantID}/reviews`,
      contentType: 'application/json',
      success: (response) => {
        this.setState({ reviews: response });
        this.avgStars(response);
      },
    });
  }

  handleTextChange(e) {
    e.preventDefault();
    this.setState({ searchText: e.target.value });
  }

  handleMouseLeave() {
    this.setState({
      redVote: [],
      greyVote: [1, 2, 3, 4, 5],
    });
  }

  handleStarHover(e) {
    e.preventDefault();
    const starNum = parseInt(e.target.id, 10);
    const redArray = [];
    const greyArray = [];
    for (let idx = 1; idx <= starNum; idx += 1) {
      redArray.push(idx);
    }
    for (let idx = starNum + 1; idx <= 5; idx += 1) {
      greyArray.push(idx);
    }
    this.setState({ redVote: redArray, greyVote: greyArray });
  }

  handleDropDown(e) {
    const { reviews } = this.state;
    const sortType = e.target.value;
    let unsorted = reviews.slice();
    const lowFirst = function compareLowest(a, b) {
      return a.stars - b.stars;
    };
    const highFirst = function compareHighest(a, b) {
      return b.stars - a.stars;
    };
    const earlyFirst = function compareEarliest(a, b) {
      const yrA = parseInt(a.posted.slice(0, 4), 10);
      const monthA = parseInt(a.posted.slice(5, 7), 10);
      const dayA = parseInt(a.posted.slice(8, 10), 10);
      const totalADays = yrA * 365 + monthA * 30 + dayA;
      const yrB = parseInt(b.posted.slice(0, 4), 10);
      const monthB = parseInt(a.posted.slice(5, 7), 10);
      const dayB = parseInt(b.posted.slice(8, 10), 10);
      const totalBDays = yrB * 365 + monthB * 30 + dayB;
      if (totalADays < totalBDays) {
        return -1;
      }
      if (totalADays > totalBDays) {
        return 1;
      }
      return 0;
    };
    const lateFirst = function compareEarliest(a, b) {
      const yrA = parseInt(a.posted.slice(0, 4), 10);
      const monthA = parseInt(a.posted.slice(5, 7), 10);
      const dayA = parseInt(a.posted.slice(8, 10), 10);
      const totalADays = yrA * 365 + monthA * 30 + dayA;
      const yrB = parseInt(b.posted.slice(0, 4), 10);
      const monthB = parseInt(a.posted.slice(5, 7), 10);
      const dayB = parseInt(b.posted.slice(8, 10), 10);
      const totalBDays = yrB * 365 + monthB * 30 + dayB;
      if (totalADays < totalBDays) {
        return 1;
      }
      if (totalADays > totalBDays) {
        return -1;
      }
      return 0;
    };
    if (sortType === 'Lowest') {
      unsorted = unsorted.sort(lowFirst);
    } else if (sortType === 'Highest') {
      unsorted = unsorted.sort(highFirst);
    } else if (sortType === 'Oldest') {
      unsorted = unsorted.sort(earlyFirst);
    } else if (sortType === 'Newest') {
      unsorted = unsorted.sort(lateFirst);
    } else {
      this.setState({ reviews: unsorted });
    }
    this.setState({ reviews: unsorted });
  }

  avgStars(reviewsArray) {
    let sum = 0;
    if (reviewsArray.length > 0) {
      sum = reviewsArray.reduce((acc, curr) => (acc + curr.stars), 0);
      const avg = sum / reviewsArray.length;
      this.setState({ avgStars: avg });
      return;
    }
    this.setState({ avgStars: 0 });
  }

  render() {
    const {
      avgStars, searchText, reviews, redVote, greyVote,
    } = this.state;

    const name = reviews[0].locname;
    return (
      <div className="mainView flex-container">
        <TopBar
          className="topBar"
          avg={avgStars}
          name={name}
          handleTextChange={this.handleTextChange}
          searchText={searchText}
          handleHover={this.handleStarHover}
          starVote={redVote}
          greyVote={greyVote}
          handleMouseLeave={this.handleMouseLeave}
          handleDropDown={this.handleDropDown}
        />
        <Reviews reviews={reviews} />
      </div>
    );
  }
}
