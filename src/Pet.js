import React, {Component} from 'react';

class Pet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Golden Retriever",
      size: "Large",
      color: "Golden Brown"
    }
  }

  render() {
    return (
      <div>
        <h1> Favorite Pet: {this.state.name}</h1>
        <p>{this.state.size} {this.state.color}</p>
        <p>And here is a random bird from data passed from App.js: {this.props.bird.name}</p>
      </div>
    );
  }
}

export default Pet;

// This is how I can use state b/c I am NOT passing data down here
  // This data is coming from state
