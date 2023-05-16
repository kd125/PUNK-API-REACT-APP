import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Beer from "./Beer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const beers = res.data;
      this.setState({ beers });
    });
  }

  likedBeer = (e) => {
    console.log(e.target.checked);
  };

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <ol>
      //       {this.state.beers.map((beer, index) => {
      //         return <Beer key={index} name={beer}></Beer>;
      //       })}
      //     </ol>
      //   </header>
      // </div>
      <div className="App">
        {this.state.beers.map((beer) => (
          <div key={beer.id} className="css-data">
            <h3>{beer.name}</h3>
            <span>{beer.first_brewed}</span>
            <h4>{beer.tagline}</h4>
            <img src={beer.image_url} alt={beer.name} className="images" />
            <p className="last-item">
              <span>{beer.abv}</span>
              {beer.description}
            </p>
            <input onChange={this.likedBeer} type="checkbox" />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
