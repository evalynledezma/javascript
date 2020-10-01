// Variables in JavaScript
var name, city, age;
name = 'Kristine';
city = 'Scottsdale';
age = 12;
console.log(age);
console.log(name);
console.log(city);

// challenge
var cat, dog;
cat = 'something';
dog = 'something';



// Difference Between Var and Let Variables
let age = 12;
console.log(age);

age = 15;
console.log(age);



// Hoisting

name = 'Kristine';
console.log(name);
var name;

// only works with declaration not assignments

console.log (age);
var age = 15;

// does not get hoisted
// assign and declare variables at the top

// use let rather than var because it won't let you hoist thus avoiding bugs



// Syntax for JavaScript Comments
console.log('Hithere'); // You can comment on the same line of code as long as it's after
/* 
How you can
do multi
line comments
*/



// Data Types

// Boolean
var truthy = true;
var notTruthy = false;
console.log(truthy);

// Null
var nully = null;
console.log(nully); //Null means empty it fills in for an empty variable

// Undefined
var notDefined;
console.log(notDefined); //When you don't set a value js sets it as undefined

// Number
let age = 12;
console.log(age);

// String
var name = "Kristine";
var nameTwo = "Jordan";
console.log(name);
console.log(nameTwo);

// Symbol
var mySym = Symbol('foo');
console.log(mySym);
// symbols can not be changed and there can only be one of them



// Objects
let user = { name: 'Kristine' }
user.name = 'Jordan';
console.log(user.name);

var user = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale',
    grades: {
      math: 90,
      science: 80,
      languageArts: 100
    }
  }
  user.age = 13;
  user.grades.coding = 95; // Can add to the object here
// similar to a python dictionary



// Check for Data Types
typeof 12;
// "number"

typeof 'Astros';
// "string"

typeof true;
// "boolean"

typeof { name: "Kristine" };
// "object"

var age;
// undefined

typeof age;
// "undefined"

age = null;
// null

typeof age;
// "object"



// How to Perform Type Casting
// adding a string and a number does not work
"100" + 42; // "10042"
42 + "100"; // "42100"
"100" - 42; // 58
100 + null; // 100

var ageOne = 12;
String(ageOne); // '12'
ageOne.toString(); // '12'

var ageTwo = '33';
Number(ageTwo); // 33
parseInt(ageTwo); // 33
parseFloat(ageTwo); // 33
+ ageTwo; // 33
parseInt('5555555555 is my phone number'); // 5555555555
parseInt('foo 5555555555 is my phone number'); // NaN
Number("100") + 42; // 142

Number(true); // 1
Number(false); // 0



