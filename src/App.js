import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Animal from './Animal';
import Birds from './Birds';

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

var birds = {
  name: "Tucan",
  size: "small",
  origin: "South America"
}

class App extends Component {
  render() {
    var mappedAnimals = animals.map((animal, i) => {
      return (<Animals name={animal.name}
                      weight={animal.weight}
                      ability={animal.ability}
                      key={i} />
        )
      })
      var mappedBirds = Object.keys(birds).map((key, i) => {
        return (<Birds list = {birds[key]} key={i}/>)
      })
      return (
        <div className="App">
          {mappedAnimals}
          {mappedBirds}
        </div>
      );
    }
  }


    // });
    // return (
    //   <div className="App">
    //     {mappedBirds} = birds.map((birds, i) => {
    //
    //     })
    //     <Birds name={birds.name}
    //             weight={birds.weight}
    //             origin={birds.origin}
    //
    //      />
//       </div>
//     );
//   }
// }


export default App;
