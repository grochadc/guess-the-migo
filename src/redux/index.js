import {createStore} from 'redux';

function throwDice (num) {
  return Math.floor(Math.random()*num)+1;
}

function randomMember() {
  let dice = throwDice(3);
  return dice===1 ? 'Quavo' : dice===2 ? 'Offset' : 'Takeoff'
}
function randomImage(exclude) {
  let dice = throwDice(10);
  return dice===exclude ? this.throwDice(3) :  dice;
}


//ACTION
const sendAnswer = answer => ({ type: 'SEND_ANSWER', payload: answer});


//REDUCER
const initialState = {
  member: randomMember(),
  image: randomImage(),
  score: 0,
  total:0
}


const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'SEND_ANSWER':
      let { member, score, total } = state;
      let correct = action.payload===member;
      return {
        ...state,
        score: correct? score+1 : score,
        total: total+1,
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

export {
  sendAnswer,
  store
}
