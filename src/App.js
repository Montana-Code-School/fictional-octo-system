import React, { Component } from 'react';

import './App.css';

class FavThingEl extends Component {
  render() {
    return (
      <li>
        {this.props.favName}   {this.props.gameTime}
      </li>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meow: false
    }
  }

  onClick () {
    console.log(this.anotherFunc(1, 2))
  }

  onChange () {
    console.log(this)
  }

  anotherFunc(num, numTwo) {
    return num + numTwo
  }

  render() {
    let yehLabel = <label htmlFor="awesome"> YEH</label>
    let favThings = [
      'Raindrops on diasies?',
      'Whiskers on Kittens',
      'Brown paper packages tied up with string'
    ]
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Meh</h1>
        </header>
        <p className="App-intro">
          {this.state.meow ? "Meow" : "Not Meow"}
          <button onClick={this.onClick.bind(this)} name="">CRAAAZZYY BUTTON</button>
          {yehLabel}
          <input onChange={this.onChange.bind(this)} id="awesome" name="awesome" />
        </p>
        <div>
          <h3>A few of my favorite things</h3>
          <ul>
            {
              favThings.map((item, index) =>
                <FavThingEl
                   key={item}
                   favName={item}
                   gameTime="now"
                 />
               )
             }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
