//ES6 coding: capitalized first letter of the words in the array.
const colors = ['red', 'green', 'blue'];
capitalizedColors = colors.map(color => `${color[0].toUpperCase()}${color.slice(1)}`)
console.log(capitalizedColors);