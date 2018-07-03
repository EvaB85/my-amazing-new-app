import React, {Component} from 'react';

class Birds extends Component {
  constructor() {
    super()
    this.state={
      name: "name",
      size: "small",
      origin: "Souther America"
    }
  }
  render() {
    return(
      <div>
        <h1> Featured Birds: {props.name}</h1>
        <p>{props.size} {props.origin}</p>
      </div>
    )
  }
}

export default Birds
