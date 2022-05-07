// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  // const arr = str.split('')
  // arr.reverse()
  // return arr.join('')


  ////    taking Str = apple
  ////     initialize variable with empty string
  ///     add each letter as I loop thru str from the end of the str
  ///     then return the new string with the reverses letter
  ///         a p p l e  ---  e l p p a
  //          0 1 2 3 4       0 1 2 3 4
  let reversed = '';

  for( let i = str.length - 1; i >=0; i--){
    
    reversed += str[i]

  }
  return reversed

}

module.exports = reverse;
