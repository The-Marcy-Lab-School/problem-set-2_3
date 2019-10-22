# Unit 2 Lesson 3 Problem Set
## Introduction to JavaScript Functions 

### Directions
Like last time, there are two parts to this problem set:
* A written response section
* JavaScript small problems<sup>[1](#myfootnote1)</sup>

To complete and submit this problem set, you will...
1. Fork this lab
2. Navigate to the `first-last`directory 
3. Change the name of this directory to _your_ first and last
4. Your written response questions live in the `short-response.md` file. Record your answers to these questions, styled appropriately with markdown.
5. Your small problems are in `exercises` directory. The directory contains three files:
    * `README.md`
    * `index.html`
    * `answers.js` 
    * `answers.test.js`
    The problem prompts are in `README.md`. You are to write your solutions in the `answers.js` file. I have written th. You are to write your functions below line three. Please use comments to indicate which question eqch function corresponds to. Example:
      ```javascript
      // Question 1
      function thisIsAnExample() {
        return true;
      }
      ```
    
    I included the `index.html` file for you so that you can run your code in the browser and use Chrome Dev tools.

### On _Testing_
* This is our first problem set with [_unit tests_](https://www.youtube.com/watch?v=CB7vnoXI0pE). Unit Testing is a way to ensure that your code functions as intended by breaking it up into smaller components and testing each part, independently. We will talk more about unit tests in the future. In fact, you will eventually write your own. For now, just follow these steps to test your code using the tests that I wrote.
  1. When you are ready to run your first test, **navigate to your `exercises` directory** and run `npm install` in the terminal. Think of this command as "installing" the tests.
  2. Now, each time you want to run test, run `npm test` in the terminal. Once again, make sure you are in your `exercises` directory. When you run the test suite, you will see some helpful information in the output. It will tell you which tests passed and failed and what the expected results of each of the tests were. Only when you have gotten **all** tests to pass can you submit this assignment with a PR. 

##
<a name="myfootnote1">**1**</a>: Exercises adapted from [Launch School](https://launchschool.com) small problems and [Code Wars](https://codewars.com) katas.
