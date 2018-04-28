import React, {Component} from 'react';

class Button extends Component {

  render(){
    return <button onClick={() => this.props.sendAnswer(this.props.member)}>{this.props.member}</button>;
  }
}

export default Button;
