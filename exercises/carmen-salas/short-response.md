# Unit 2 - Lesson 3: Introduction to JavaScript Functions
## Short Response Questions

1. What is the difference between function parameters and arguments?
    *Function parameters go in the parenthesis of function which is a place holder for the arguments. Arguments are values passed to the function parameters when the function is called. Additionally, parameters become locally scoped variables inside the body of the function.

2. What happens when you invoke a JavaScript function with a missing argument? What about calling a function with _extra_ arguments? 
    *When you call a function missing argument 'undefined' is automatically passed as the argument or arguments neccessary to run the funtion.  If you call a function with more than the amount of arguments needed it will ignore the extra arguments.

3. Define _hoisting_. What impact does hoisting have on the way that we structure our JavaScript programs?
    *To hoist in JavaScript is to lift something in your code to the top.
    *Hoisting occurs in between author time and run time, this is called compilation. In run time functions are hoisted to the top of the program. However, in author time we usually structure our programs to call the functions after they are declared to make it easier to read and debug. 

4. Which type of functions is hoisted? Which type are not?
    *Functions declarations are hoisted. Function expressions are not hoised which is when a function is declared in a variable. This is because when a variable is declared it is hoisted after the declarations are made for functions.  

