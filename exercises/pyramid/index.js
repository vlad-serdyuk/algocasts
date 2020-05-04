// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  for(let i = 0, y = 1; i < n; i++, y += 2) {
    const spaces = ' '.repeat(n - i -1);
    const sharps = '#'.repeat(y);
    console.log(spaces + sharps + spaces);
  }
}

module.exports = pyramid;
