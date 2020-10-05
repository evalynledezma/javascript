// How to Swap Variable Values in JavaScript with Variable Deconstruction
let playerOne = 'Tiffany';
let playerTwo = 'Kristine';

let tempPlayerOne = playerOne;
let tempPlayerTwo = playerTwo;

playerOne = tempPlayerTwo;
playerTwo = tempPlayerOne;

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
Player One: ${playerOne}
Player Two: ${playerTwo}
`);


// How to Implement Array Destructuring in JavaScript
const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]
  
  const [posts, repos, profile] = apiList;
  
  console.log(posts);
  console.log(repos);
  console.log(profile);


//   How to Pass JavaScript Objects as Function Arguments by Leveraging Deconstruction
const user = {
    name: 'Kristine',
    email: 'kristine@devcamp.com'
  }
  
  const renderUser = ({ name, email }) => {
    console.log(`${name}: ${email}`);
  }
  
  renderUser(user);