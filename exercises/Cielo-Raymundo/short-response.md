# Unit 2 - Lesson 3: Introduction to JavaScript Functions
## Short Response Questions

1. What is the difference between function parameters and arguments?
    Function parameters are "placeholders" that go in the function that have no value, but are being used. Arguments are actual values that go 
    in the function 

2. What happens when you invoke a JavaScript function with a missing argument? What about calling a function with _extra_ arguments? 
    If you call a function with a missing argument then it will, not run and get an error. If you call a function with extra arguments, then
    it will just ignore the extra argument so that the fiunction still runs.

3. Define _hoisting_. What impact does hoisting have on the way that we structure our JavaScript programs?
    Hoisting is when the program takes all the variables and functions declarations to the top of the program and reads them. Then it runs all the rest of the
    program. Hoisting can allow us to call a function without declaring it first, this can cause other programmers reading your code to be confused
    about that certain function does. Hoisting affects how programmers write their code so that you aren't able to call certain functions and variables
    before they are initialized. 

4. Which type of functions are hoisted? Which type are not?
    Function declarations are hoisted, while function expressions aren't. 


