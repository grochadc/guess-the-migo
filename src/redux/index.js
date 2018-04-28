import {createStore} from 'redux';
import {randomMember, randomImage} from '../lib/random/index';


//ACTIONS
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
      let message = correct? 'You are correct!' : 'Incorrect, that\'s '+member;
      alert(message);
      return {
        ...state,
        member: randomMember(),
        image: randomImage(),
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
