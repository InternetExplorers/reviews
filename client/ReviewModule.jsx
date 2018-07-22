import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import TopBar from './TopBar.jsx';
import Reviews from './Reviews.jsx';

export default class ReviewModule extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      reviews: [
        {
          locname: 'Intial',
          stars: 3,
          posted: '2018-12-25',
          username: 'Tim, the user',
          userloc: 'San Francisco, CA',
          numfriends: 15,
          photoLoc: '../photos/p1.jpg',
          mumreviews: 5,
          message: 'Here is a review.  The text is long!',
        },
      ],
      avgStars: 0,
    };
    this.avgStars = this.avgStars.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount() {
    this.avgStars();
    this.fetchReviews(3);
  }

  fetchReviews(restaurantID) {
    $.ajax({
      type: 'GET',
      url: `/locations/${restaurantID}`,
      contentType: 'application/json',
      success: (response) => {
        this.setState({ reviews: response });
      },
    });
  }

  handleTextChange(e) {
    e.preventDefault();
    this.setState({ searchText: e.target.value });
  }

  avgStars() {
    let sum = 0;
    const { reviews } = this.state;
    sum = reviews.reduce((acc, curr) => (acc + curr.stars), 0);
    const avg = sum / reviews.length;
    this.setState({ avgStars: avg });
  }

  render() {
    const { avgStars, searchText, reviews } = this.state;
    const name = reviews[0].locname;
    return (
      <div className="mainView">
        <TopBar
          className="topBar"
          avg={avgStars}
          name={name}
          handleTextChange={this.handleTextChange}
          searchText={searchText}
        />
        <Reviews />
      </div>
    );
  }
}
