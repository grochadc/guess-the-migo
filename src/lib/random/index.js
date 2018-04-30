function throwDice (num) {
  return Math.floor(Math.random()*num);
}

function randomMember() {
  let dice = throwDice(3);
  return dice===0 ? 'Quavo' : dice===1 ? 'Offset' : 'Takeoff'
}
function randomImage(exclude) {
  let dice = throwDice(9);
  return dice===exclude ? this.throwDice(3) :  dice;
}

export {
  throwDice,
  randomImage,
  randomMember
}
