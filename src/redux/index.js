import {createStore} from 'redux';
import {randomMember, randomImage} from '../lib/random/index';


//ACTIONS
const sendAnswer = answer => ({ type: 'SEND_ANSWER', payload: answer});


//REDUCER
const initialState = {
  members: {
    Quavo: {images:require.context('../images/Quavo/', false, /\d*\.jpg/).keys()},
    Offset: {images: require.context('../images/Quavo/', false, /\d*\.jpg/).keys()},
    Takeoff: {images: require.context('../images/Quavo/', false, /\d*\.jpg/).keys()}
  },
  currentMember: randomMember(),
  currentImage: randomImage(),
  score: 0,
  total:0
}


const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'SEND_ANSWER':
      let { currentMember, score, total } = state;
      let correct = action.payload===currentMember;
      let message = correct? 'You are correct!' : 'Incorrect, that\'s '+currentMember;
      alert(message);
      return {
        ...state,
        currentMember: randomMember(),
        currentImage: randomImage(),
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
