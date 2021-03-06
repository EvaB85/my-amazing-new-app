import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Animals from './Animals';
import Bird from './Bird';
import Pet from './Pet'

var animals = [
  {
    name: "Clouded Leopard",
    weight: "25-50",
    ability: "Their hind limbs are longer than its front limbs so they can leap so far!"
  },
  {
    name: "Armadillo",
    weight: "55-120",
    ability: "They are prolific diggers!"
  },
  {
    name: "Otter",
    weight: "2-100",
    ability: "These precious creatures have powerful webbed feet and can hold their breath underwater for long periods of time!"
  },
];

var bird = {
  name: "Tucan",
  size: "small",
  origin: "Brazil"
};

class App extends Component {
  render() {
    var mappedAnimals = animals.map((animal, i) => {
      return (
        <Animals
          name={animal.name}
          weight={animal.weight}
          ability={animal.ability}
          key={i}
        />
      )
    })

    return (
      <div className="App container">
        <div className="row">
          <div className="col s8 grouping-box">
            <div className="animals">
              {mappedAnimals}
            </div>
          </div>
          <div className="col s4 grouping-box">
            <div className="other-animals">
              <div className="row">
                <div className="col s12">
                  <Bird bird={bird} />
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  <Pet bird={bird} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
