import React from 'react';
import TopBar from './TopBar.jsx';
import Reviews from './Reviews.jsx';

export default class ReviewModule extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      reviews: [
        {
          locName: "the barbed wire",
          stars: 3,
          posted: '2018-12-25',
          username: 'Tim, the user',
          userLoc: 'San Francisco, CA',
          numfriends: 15,
          photoLoc: '../photos/p1.jpg',
          mumReviews: 5,
          message: 'Here is a review.  The text is long!',
        },
        {
          locName: "the barbed wire",
          stars: 4,
          posted: '2018-07-25',
          username: 'Bill, the user',
          userLoc: 'San Francisco, CA',
          numfriends: 7,
          photoLoc: '../photos/p2.jpg',
          mumReviews: 6,
          message: 'Here is another review.  The text is even longer!',
        },
      ],
      avgStars: 0,
    };
    this.avgStars = this.avgStars.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount() {
    this.avgStars();
  }

  handleTextChange(e) {
    e.preventDefault();
    const { searchText } = this.state;
    console.log(e.target.value);
    this.setState({ searchText: e.target.value }, () => {
      console.log(searchText);
    });
  }

  avgStars() {
    // Get all the stars in each review. avg them. return the avg.
    let sum = 0;
    const { reviews } = this.state;
    sum = reviews.reduce((acc, curr) => (acc + curr.stars), 0);
    const avg = sum / reviews.length;
    this.setState({ avgStars: avg });
  }

  render() {
    const { avgStars, searchText } = this.state;
    const { reviews } = this.state;
    const name = reviews[0].locName;
    return (
      <div className="mainView">
        <TopBar
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
