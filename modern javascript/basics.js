// const
const city = 'Scottsdale';


// Backtick string interpolation
Code
const lyrics = 'Never gonna give you up';

console.log(`I'm ${lyrics}`);
console.log(`I'm ${2 + 2}`);
console.log(`I'm ${lyrics + " " + lyrics}`);


// Integrating Conditionals into Strings with Ternary Operators
const page = 'about';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);


// Functions
// Same function written as function declaration
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Tiffany', 'Hudgens');
  
  // Same function written as function expression
  fullName = (fName, lName) => { 
    console.log(`${lName}, ${fName}`);
  }
  fullName('Kristine', 'Hudgens');
  
  // Basic arrow function
  helloWorld = () => { console.log("Hi there"); }
  helloWorld();
  
  // Arrow function with shorthand function argument for single arguments
  firstName = fname => { console.log(fname.toUpperCase()); }
  firstName('Jordan');
  
  // Arrow function with multiple arguments
  fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
  fullName('Kristine', 'Hudgens');