//   var userObj = {
//     email: 'sample@devcamp.com',
//     fullName: 'Kristine Hudgens'
// }

function dashboardGreeting() {
    var userObj = {
      email: 'sample@devcamp.com',
      fullName: 'Jordan Hudgens'
  }
    console.log ("Hi there, ".concat(userObj.fullName));
  }
  
  dashboardGreeting();
  console.log (userObj.fullName);
  