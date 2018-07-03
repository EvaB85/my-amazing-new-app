import React from 'react';

const Animal = props => (
  <div>
    <h1> Featured animals: {props.name}</h1>
    <p>{props.weight} {props.ability}</p>
  </div>
)

export default Animal
