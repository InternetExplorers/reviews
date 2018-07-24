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
      voted: false,
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
  }

  componentDidMount() {
    const randomReview = Math.ceil(Math.random() * 100);
    this.fetchReviews(randomReview);
  }

  fetchReviews(restaurantID) {
    $.ajax({
      type: 'GET',
      url: `/locations/${restaurantID}`,
      contentType: 'application/json',
      success: (response) => {
        this.handleStateChanges({ reviews: response });
        this.avgStars(response);
      },
    });
  }

  handleTextChange(e) {
    e.preventDefault();
    this.setState({ searchText: e.target.value });
  }

  handleMouseLeave() {
    this.handleStateChanges({
      redVote: [],
      greyVote: [1, 2, 3, 4, 5],
    });
  }

  handleStarHover(e) {
    console.log(e);
    console.log(typeof e.target);
    const { redVote, greyVote } = this.state;
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
    const voteState = { redVote: redArray, greyVote: greyArray };
    this.handleStateChanges(voteState);
  }

  handleStateChanges(stateChange) {
    this.setState(stateChange);
  }

  avgStars(reviewsArray) {
    let sum = 0;
    sum = reviewsArray.reduce((acc, curr) => (acc + curr.stars), 0);
    const avg = sum / reviewsArray.length;
    this.handleStateChanges({ avgStars: avg });
    return avg;
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
        />
        <Reviews reviews={reviews} />
      </div>
    );
  }
}
