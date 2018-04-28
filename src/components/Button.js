import React, {Component} from 'react';
import {sendAnswer} from '../redux/index';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    sendAnswer: answer => dispatch(sendAnswer(answer))
  }
}

class ConnectedButton extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
    event.preventDefault();
    let answer = this.props.member;
    this.props.sendAnswer(answer);
    console.log('Button clicked');
  }

  render(){
    let { member } = this.props;
    return <button onClick={this.handleClick}>{member}</button>;
  }
}

const Button = connect(null, mapDispatchToProps)(ConnectedButton);

export default Button;
