var age = 10;
var ageTwo = '12';

if (age === ageTwo) {
  console.log('They are equal');
}

if (age !== ageTwo) {
  console.log('Not equal');
}

if (age >= 25) {
  console.log('Old enough to rent a car');
}

if (age <= 10) {
  console.log('You can eat from the kid menu');
}

// If/Else Conditionals
var age = 30;

if (age <= 10) {
  console.log('You can eat from the kid menu');
} else {
  console.log('Adult menu time for you');
}

// Compound Conditionals
var age = 30;

if (age <= 10) {
    console.log('You can eat from the kid menu');
    console.log('You are not old enough to drive');
    console.log('You are not old enough to rent a car');
}   else if (age >=16 && age < 25) {
    console.log('You can not eat from the kid menu');
    console.log('You are old enough to drive');
    console.log('You are not old enough to rent a car');
}   else if (age >= 25) {
    console.log('You can not eat from the kid menu');
    console.log('You are old enough to drive');
    console.log('You are old enough to rent a car');
}
