# Unit 2 - Lesson 3: Introduction to JavaScript Functions
## Problem Set 2.3 - Coding Exercises

1. Write a function that takes a name and logs a greeting with `"Good morning"` and the person's name.

    Example:
    ```javascript
    greet("Carmen"); // "Good morning, Carmen!"
    greet("Devonte"); // "Good morning, Devonte!"
    greet("Reuben Ogbonna"); "Good morning, Reuben Ogbonna!"
    ```

2. Write a function that logs all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

    Example:
    ```javascript
    logOddNumbers();

    // 1
    // 3
    // 5
    .
    .
    .
    // 97
    //99
    ```

3. Write a function that returns the area of a rectangle, given a length and width:

    Examples:
    ```javascript
    area(5, 7); // 35
    area(15, 10); // 150
    area(25.75, 42); // 1081.5
    ```

4. You are given two angles (in degrees) of a triangle. Write a function to return the 3rd **Note:** only positive integers will be tested.
    Examples:
    ```javascript
    otherAngle(30, 60); // 90
    otherAngle(60, 60); // 60
    otherAngle(43, 78); // 59
    otherAngle(10, 20); // 150
    ```

5. Write a function that returns the diameter of a cicle, given its area:

    Examples:
    ```javascript
    diameterFromArea(10); // 3.5682482323055424
    diameterFromArea(100); // 11.283791670955125
    ```

6. Write a function that calculates the total price of the bill, after tax. The function should take two arguments, a price and a percentage, and it should return the total price.

    Examples:
    ```javascript
    totalPrice(100, 5); // 105;
    totalPrice(250, 20); // 300;
    totalPrice(1, 18); // 1.18;
    ```

7. Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

    Examples:
    ```javascript
    shortLongShort('abc', 'defgh');    // "abcdefghabc"
    shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
    shortLongShort('', 'xyz');         // "xyz"
    ```

8. Write a describeAge function that takes a parameter age (which will always be a positive integer) and does the following:

    If the age is 12 or lower, it returns `"You're a(n) kid"`
    If the age is anything between 13 and 17 (inclusive), it returns `"You're a(n) teenager"`
    If the age is anything between 18 and 64 (inclusive), it return `"You're a(n) adult"`
    If the age is 65 or above, it return `"You're an elderly"`
    Your goal is to write this function using as few lines of code as possible. Up for a challenge? This function can be written in one-line using ternary operator(s) 😳.

    Examples:
    ```javascript
    describeAge(11); // "You're a(n) kid"
    describeAge(13); // "You're a(n) teenager"
    describeAge(19); // "You're a(n) adult"
    describeAge(64); // "You're a(n) adult"
    describeAge(64); // "You're a(n) adult"
    ```


9. Leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

    Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

    Examples:
    ```javascript
    isLeapYear(2016); // true
    isLeapYear(2015); // false
    isLeapYear(2100); // false
    isLeapYear(2400); // true
    isLeapYear(1900); // false
    isLeapYear(1752); // true
    isLeapYear(1700); // false
    ```

10. Write a function that returns the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For example, if the supplied number is 17, the result should be 60 (3 + 5 + 6 + 9 + 10 + 12 + 15).

    You may assume that the number passed in is an integer greater than 1.

    Examples:
    ```javascript
    multisum(13); // 45 
    multisum(17); // 60 
    multisum(1000); // 234168
    ```

11. Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use `String.prototype.charCodeAt()` to determine the ASCII value of a character.)

    Examples:
    ```javascript
    asciiValue('Four score');         // 984
    asciiValue('Launch School');      // 1251
    asciiValue('a');                  // 97
    asciiValue('');                   // 0
    ```
12. Write a function that takes one argument, a positive integer, and returns a string of alternating `'1'`s and `'0'`s, always starting with a `'1'`. The length of the string should match the given integer.

    Examples:
    ```javascript
    stringy(6);    // "101010"
    stringy(9);    // "101010101"
    stringy(4);    // "1010"
    stringy(7);    // "1010101"
    ```

