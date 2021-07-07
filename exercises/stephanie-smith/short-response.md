# Unit 2 - Lesson 3: Introduction to JavaScript Functions
## Short Response Questions

1. What is the difference between function parameters and arguments?
- Function parameters are placeholders that are meant for input when the function is being declared or from the user. An argument is the information you provide that you want to run in the function.

2. What happens when you invoke a JavaScript function with a missing argument? What about calling a function with _extra_ arguments? 
- It will be undefined if it is missing an argument; if there are more arguments than parameters, it will ignore the extras.

3. Define _hoisting_. What impact does hoisting have on the way that we structure our JavaScript programs?
- _Hoisting_ is taking pieces of code, such as a function declaration or variables, and brings them to the very beginning. This guides programmers to logistically lay out their code, because hoisting can cause variables or function expressions to be undefined or not work. 

4. Which type of functions are hoisted? Which type are not?
- Function declarations are hoisted, however, arrow functions and function expressions are not hoisted. Any function that has to do with a variable is impossible to hoist and have it work correctly.


