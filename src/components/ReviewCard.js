import React, { Component } from 'react';
import { ReviewCardWrap } from '../styled-components/reviewcard';
import StarIcon from '@material-ui/icons/Star';

class ReviewCard extends Component {
  render(){
    const { styleObj, review: { stars, review, name }} = this.props;
    return (
      <ReviewCardWrap style={styleObj}>
        <div>
          {
            [...Array(stars)].map((a,i) => {
              return <StarIcon style={{ color: "gold" }}/>
            })
          }
        </div>
        <p>{review}</p>
        <h3>- {name}</h3>
      </ReviewCardWrap>
    );
  }
}

export default ReviewCard;
