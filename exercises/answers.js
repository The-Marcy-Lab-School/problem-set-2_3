//Question 1: Greeting
function greeting(name) {
  console.log(`Good morning, ${name}!`);
}

//Question 2: Logging Odd Numbers
function oddNums() {
  for(let num = 0; num < 100; num++) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
}

//Question 3: Rectangle Area
function rectangleArea(length, width) {
  console.log(length * width);
}

//Question 4: Triangle Angles
function triangleAngle(angle1, angle2) {
  let angle = 180 - (angle1 + angle2);
  console.log(angle);
}

//Question 5: Circle Diameter
function diameter(area) {
  let d = 2 * Math.sqrt(area / Math.PI);
  console.log(d);
}

//Question 6: Total Price
function totalPrice(price, percentage) {
  let total = price + (price / 100 * percentage);
  console.log(total);
}

//Question 7: Concatenation of Strings
function cat(string1, string2) {
  if (string1.length > string2.length) {
    console.log(`${string2}${string1}${string2}`);
  }
  else if (string1.length < string2.length) {
    console.log(`${string1}${string2}${string1}`);
  }
}

//Question 8: Age
function describeAge(age) {
  if (age <= 12) {
    console.log("You're a kid!");
  }
  else if (age >= 13 && age <= 17) {
    console.log("You're a teenager!");
  }
  else if(age >= 18 && age <= 64) {
    console.log("You're an adult!");
  }
  else if (age > 64) {
    console.log("You're an elder!");
  }
}

//The function that uses the ternary operator
function describeAge(age) {
  let desc = (age <= 12) ? "You're a kid!" : (age >= 13 && age <= 17) ? "You're a teenager!" : (age >= 18 && age <= 64) ? "You're an adult!" : "You're an elder!";
  console.log(desc);
}

//Question 9: Leap Years
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { //if year is divisible by 4 and not divisible by 100, or if it's divisible by 400
    return true;
  }
  else {
    return false;
  }
}

//Question 10: Sum of Nums with Multiples
function sum(num) {
  let number = 0;
  
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      number += i;
    }
  }
  return number;
}

//Question 11: ASCII String Values
function asciiValue(string) {
  let sum;
  
  for (let i = 0; i < string.length; i++) {
    sum = string.prototype.charCodeAt(0);
    sum += i;
  }
  return sum;
}