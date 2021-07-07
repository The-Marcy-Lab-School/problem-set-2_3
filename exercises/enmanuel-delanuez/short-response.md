# Unit 2 - Lesson 3: Introduction to JavaScript Functions
## Short Response Questions

1. What is the difference between function parameters and arguments?
  - Function arguments are the values we provide for a function to act upon when invoked. Function parameters help us write our functions because they essentially create variables that are local to the function and equal to the received argument(s). Because of this they serve as placeholders for arguments while giving us a tangible and renameable 'object' to manipualte.

2. What happens when you invoke a JavaScript function with a missing argument? What about calling a function with _extra_ arguments?
 - Invoking a function with not enough arguments JavaScript will use `undifined`'s to match the necesary number of arguments and proceed to run the function. Extra arguments will be ignored.

3. Define _hoisting_. What impact does hoisting have on the way that we structure our JavaScript programs?
 - Hoisting is a process JavaScript undergoes between author and run-time where certain code is lifted to the top of the program allowing it to be referenced to what appears to the author as before it is defined. Hoiting affects functions declarations and variables, although variables are hoisted uninitialized with no value (undifined).

4. Which type of functions are hoisted? Which type are not?
 - Function declarations are hoisted (when declared with the function keyword) and function expressions (when functions are the value of a variable) are not.