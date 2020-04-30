// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* function reverse(str) {
  return str.split('').reverse().join('');
}

function reverse(str) {
  if(str.length === 1) {
    return str;
  }

  return str.slice(-1) + reverse(str.slice(0, -1));
}

function reverse(str) {
  let result = '';
  
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}
 */
function reverse(str) {
  let result = '';
  
  for(let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }

  return result;
}

module.exports = reverse;
