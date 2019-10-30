# Unit 2 - Lesson 3: Introduction to JavaScript Functions
## Short Response Questions

1. What is the difference between function parameters and arguments?
    Parameters are variables that a function uses as a part of its function declaration.
    Arguments are what a function takes in when the function is invoked. 

2. What happens when you invoke a JavaScript function with a missing argument? What about calling a function with _extra_ arguments? 
    If there are extra arguments in a function they will be ignored as if they were not there. If there are any missing arguments they will be passed as undefined. 

3. Define _hoisting_. What impact does hoisting have on the way that we structure our JavaScript programs?
    Hoisting occurs with functions and vairables in which they are conceptually moved to the top of a function during compliation. This allows for a function to be invoked before its function defintion. Hoisting can cause side effects such as undefined variables and reference errors.

4. Which type of functions are hoisted? Which type are not?
    Function declarations are hoisted and function expressions are not hoisted. 


