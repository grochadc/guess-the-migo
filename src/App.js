import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Button extends Component {

  render(){
    return <button onClick={() => this.props.sendAnswer(this.props.member)}>{this.props.member}</button>;
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {member:this.randomMember(), image: this.randomImage(), score: 0, total:0}
  }
  throwDice = (num) => {
    return Math.floor(Math.random()*num)+1;
  }
  randomMember = () => {
    let dice = this.throwDice(3);
    return dice===1 ? 'Quavo' : dice===2 ? 'Offset' : 'Takeoff'
  }
  randomImage = (exclude) => {
    let dice = this.throwDice(10);
    return dice===exclude ? this.throwDice(3) :  dice;
  }

  handleAnswer = (answer) => {
    let correct = answer===this.state.member
    let msg = correct ? 'Correct!': 'Incorrect it\'s '+this.state.member;
    alert(msg);

    let member = this.randomMember();
    let image = this.randomImage();
    this.setState(prevState => prevState.member === member && prevState.image === image ? {image: this.randomImage()}: {total: prevState.total+1,member, image, score: correct ? prevState.score+1 : prevState.score} )
  }

  render(){
    return (
      <div id="container" width="700" align="center">
      <h2>Guess the Migo!!</h2>
        <h4>Score: {this.state.score}/{this.state.total}</h4>
        <div class="buttonContainer">
          <Button member="Quavo" sendAnswer={this.handleAnswer}/>
          <Button member="Offset" sendAnswer={this.handleAnswer}/>
          <Button member="Takeoff" sendAnswer={this.handleAnswer}/>
        </div>
        <div><img alt='' src={'images/'+this.state.member+'/'+this.state.image+'.jpg'} width="60%" height="60%"/></div>
        <div>
        </div>

      </div>
    )
  }
}

export default App;
