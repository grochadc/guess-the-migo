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

export {
  throwDice,
  randomImage,
  randomMember
}
