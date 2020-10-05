// JSON Parsing Guide for API Development
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true


// A promise gives us the ability to make an outside API call and really do any kinda task where we should not have an expectation of the task occurring in real-time. So if we're building some type of system or some type of feature where we do not have an expectation of whatever we're doing happening right away such as making a database query or an outside API call then what we can do is utilize a promise and part of the reason why I wanted to have a dedicated guide to a very simplified version of this is because when it comes to javascript development one of the most important tasks that you're going to be doing is communicating with outside services.