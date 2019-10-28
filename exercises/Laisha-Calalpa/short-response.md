# Unit 2 - Lesson 3: Introduction to JavaScript Functions
## Short Response Questions

1. What is the difference between function parameters and arguments?
    Parameters are variables that a function uses as a part of its function declaration.
    Arguments are what a function takes in when the function is invoked. 

2. What happens when you invoke a JavaScript function with a missing argument? What about calling a function with _extra_ arguments? 
    The function will execute to undefined if it has missing arguments. Since there is no value being given to the function there is nothing to undergo the operations in the function. An extra argument will be discarded as if it were not there. 

3. Define _hoisting_. What impact does hoisting have on the way that we structure our JavaScript programs?
    Hoisting is the act in which a certian object, in this case a function, is lifted up to the top in order for a certain action to be executed. Hoisting may cause confusion when others read through your program structures as functions can be invoked before a function declaration is made. Further _hosting_ may also cause a program to do an undesired action as it follows the the rules of hoisting instead of the intended program instructions. 

4. Which type of functions are hoisted? Which type are not?
    Function declarations are hoisted and function expressions are not hoisted. 


