import React from 'react';
import PropType from 'prop-types'

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="article" />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropType.shape({
    headline: PropType.string.isRequired,
    tab: PropType.string.isRequired,
    img: PropType.string,
    author: PropType.string.isRequired
  })
}

export default Card;
