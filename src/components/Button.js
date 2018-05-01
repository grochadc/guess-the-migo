import React from 'react';
import {sendAnswer} from '../redux/index';
import {connect} from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    sendAnswer: answer => dispatch(sendAnswer(answer))
  }
}

function ConnectedButton(props){
    let { member, sendAnswer } = props;
    return <button onClick={() => sendAnswer(member)}>{member}</button>;
}

const Button = connect(null, mapDispatchToProps)(ConnectedButton);

export default Button;
