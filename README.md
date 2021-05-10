### Notes on SVGs in React

I'll often collect a series of notes in a quick and dirty react-app like this one.

This app is a collection of notes and reminders on svg. You could do a lot worse than to read through these notes sequentially if/when you want to level up your game to basic proficiency when dealing with svgs in react.

There are many different ways to deal with SVGs in React - some good, some _not_ so good.

I've settled on importing `import { ReactComponent as MyIcon } from './myIcon.svg';`

Best if you can create a script to strip away all the sketch/figma/vectornator junk code from the svg file, then you can do anything you want with svgs.

CEO David mentioned 'wow-factor' the other day? This would be a good place to start: **simple** css animations on hover, click etc. Colours can be animated very easily.

Here are some examples and notes for your consideration!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run app:
 `npm start`
