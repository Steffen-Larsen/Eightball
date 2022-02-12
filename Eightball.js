var userName='Steffen';

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

var userQuestion='Mr. Eightball, what is life?';

console.log(`${userName} asked the following: ${userQuestion}`);

var randomNumber = Math.floor(Math.random() * 8)

let eightBall = randomNumber;

if (eightBall === 1) {console.log('It is certain')}
  else if (eightBall === 2) {console.log('It is decidedly so')}
  else if (eightBall === 3) {console.log('It is strange')}
  else if (eightBall === 4) {console.log(`if it's love - Baby don't hurt me`)}
  else if (eightBall === 5) {console.log('It is unforeseable')}
  else if (eightBall === 6) {console.log('You alone decide')}
  else if (eightBall === 7) {console.log('Worth it')}
  else {console.log(`Not something you'd want to ask me`)};