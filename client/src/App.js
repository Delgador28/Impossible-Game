import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import scenes from './scenes.json';



class App extends Component {
  constructor() {
    super();

    this.state = {
      scene_num: 0,
    }
  }

  nextScene = (s) => {
    //in this function change scene_num in state to whatever gets passed in
    //then check if it works by clicking the buttons
    this.setState({ scene_num: s });
  }

  render() {
    return (
      <div className="App">


        <header className="App-header">

          <h1 className="App-title">Welcome to the Game</h1>
        </header>

        <p>{this.state.name}</p>

        <p>{scenes[this.state.scene_num].text}</p>
<div className="stuff">
        <img src={scenes[this.state.scene_num].image} width="400" height="400" />

        {scenes[this.state.scene_num].options.map((op, i) =>
          <div className="Button" key={i}>
            <button  onClick={() => this.nextScene(op.send_to)}>{op.text}</button>
            <br />
          </div>
        )}
   </div>
    
      </div>
    );
  }
}

export default App;

// make the things chsoen append and stay on the page as the oaths get deeper into the logic