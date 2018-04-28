import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {sendAnswer, store} from './redux/index';
import Game from './components/Game';

class App extends Component {
  render(){
    return (
      <div id="container" width="700" align="center">
      <h2>Guess the Migo!!</h2>
        <Game />
      </div>
    )
  }
}
window.store = store;
window.sendAnswer = sendAnswer;
export default App;
