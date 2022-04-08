function end_script() {
  const stringLimit = 10;
  const str = '';
  if (str.length <= stringLimit) {
    return true;
  } else {
    return false;
  }
}
module.exports = end_script;

function reverseString(str) {
  const newString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
reverseString('hello');
