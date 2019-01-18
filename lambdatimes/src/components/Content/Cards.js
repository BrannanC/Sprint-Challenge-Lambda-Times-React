import React, { Component } from 'react';
import PropType from 'prop-types'

import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(el => <Card card={el} key={el.headline} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropType.arrayOf(PropType.object).isRequired
}

export default Cards;