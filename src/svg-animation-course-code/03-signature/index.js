


const squiggle = document.querySelector('.squiggle')

const pathLength = squiggle.getTotalLength()

console.log(pathLength)

var myRoot = document.querySelector(':root');

myRoot.style.setProperty('--path-length', `${pathLength}px`)
