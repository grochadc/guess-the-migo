import React from 'react';
import {connect} from 'react-redux';
import Button from './Button';

function getImageSrc(state){
  let {currentMember, currentImage, members} = state;
  let dir = '../images/'+currentMember;
  window.imgs = members[currentMember].images;
  let img = members[currentMember].images[currentImage].slice(1);
  return dir+img;
}

const mapStateToProps = state =>{
  return {
    ...state,
    imageSrc: getImageSrc(state)
  }
}

function ConnectedGame(props) {
    let { score, total, imageSrc} = props
    return (
      <div id="game">
        <h4>Score: {score}/{total}</h4>

        <div className="buttonContainer">
          <Button member="Quavo" />
          <Button member="Offset" />
          <Button member="Takeoff" />
        </div>

        <div><img alt='Migo Member' src={imageSrc} width="60%" height="60%"/></div>
      </div>
    )
  }

const Game = connect(mapStateToProps)(ConnectedGame);
export default Game;
