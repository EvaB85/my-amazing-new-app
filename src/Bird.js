import React from 'react';

const Bird = props => {
  return(
    <div>
      <h1> Featured Bird: {props.bird.name}</h1>
      <p>{props.bird.size} {props.bird.origin}</p>
    </div>
  )
}

export default Bird
