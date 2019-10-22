// Question 1
function greet(name) {
  console.log(`Good morning, ${name}!`);
}

// Question 2
function logOddNumbers() {
  for(let num = 0; num < 100; num++) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
}

// Question 3
function area(length, width) {
  console.log(length * width);
}

// Question 4
function otherAngle(angle1, angle2) {
  let angle = 180 - (angle1 + angle2);
  console.log(angle);
}

// Question 5
function diameterFromArea(area) {
  let d = 2 * Math.sqrt(area / Math.PI);
  console.log(d);
}

// Question 6
function totalPrice(price, percentage) {
  let total = price + (price / 100 * percentage);
  console.log(total);
}

// Question 7
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    console.log(`${string2}${string1}${string2}`);
  }
  else if (string1.length < string2.length) {
    console.log(`${string1}${string2}${string1}`);
  }
}

// Question 8
function describeAge(age) {
  let desc = (age <= 12) ? "You're a kid!" : (age >= 13 && age <= 17) ? "You're a teenager!" : (age >= 18 && age <= 64) ? "You're an adult!" : "You're an elder!";
}

// Question 9
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { //if year is divisible by 4 and not divisible by 100, or if it's divisible by 400
    return true;
  }
  else {
    return false;
  }
}

// Question 10
function multisum(num) {
  let number = 0;
  
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      number += i;
    }
  }
  return number;
}

// Question 11
function asciiValue() {
  let sum;
  
  for (let i = 0; i < string.length; i++) {
    sum = string.prototype.charCodeAt(0);
    sum += i;
  }
  return sum;
}

// Question 12
function stringy() {

}

// Do NOT touch or write anything below this line
module.exports = {
  greet,
  logOddNumbers,
  area,
  otherAngle,
  diameterFromArea,
  totalPrice,
  shortLongShort,
  describeAge,
  isLeapYear,
  multisum,
  asciiValue,
  stringy,
};
