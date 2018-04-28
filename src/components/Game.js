import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from './Button';

const mapStateToProps = state =>{
  return state;
}

class ConnectedGame extends Component{
  render(){
    return (
      <div id="game">
        <h4>Score: {this.props.score}/{this.props.total}</h4>

        <div className="buttonContainer">
          <Button member="Quavo" />
          <Button member="Offset" />
          <Button member="Takeoff" />
        </div>

        <div><img alt='' src={'images/'+this.props.member+'/'+this.props.image+'.jpg'} width="60%" height="60%"/></div>
      </div>
    )
  }
}


const Game = connect(mapStateToProps)(ConnectedGame);
export default Game;
