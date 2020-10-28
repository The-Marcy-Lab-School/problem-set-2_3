// Question 1
function greet(name) {
  return `Good morning, ${name}!`;
}
greet("Carmen!");
greet("Devonte");
greet("Rueben Ogbonna");


// Question 2
function logOddNumbers(num) {
  for  ( let num = 1; num <= 99; num+= 1){
    if (num % 2 !== 0){
      console.log(num);
    }  
 }
}
let num;
logOddNumbers(num);

// Question 3
function area(length, width){
 return length * width;
}

area(5, 15);
area(15, 10);
area(25.75, 42);


// Question 4
function otherAngle(angle1 , angle2){
 return 180 - angle1 - angle2;
  
}

otherAngle(30, 60);
otherAngle(60, 60);
otherAngle(43, 78);
otherAngle(10, 20);

// Question 5
function diameterFromArea(num){
  return 2 * Math.sqrt(num / Math.PI);
}

diameterFromArea(10);
diameterFromArea(100);

// Question 6

function totalPrice(price, tax){ 
 let after_tax = price * tax / 100;
  return price + after_tax;
}

totalPrice(100, 5);
totalPrice(250, 20);
totalPrice(1, 18);


// Question 7
function shortLongShort(input1 , input2){
  if (input1.length < input2.length) {
    return input1 + input2 + input1;
  } else {
   return input2 + input1 + input2;
    }
}

shortLongShort("abc", "defgh");
shortLongShort('abcde', 'fgh');
shortLongShort('', 'xyz');

// Question 8
function describeAge(age) {
  return age > 64 ? "You're an elderly" : age > 18 ? "You're an adult": age > 13 ? "You're a teenager": "You're a kid";
}
describeAge(2);
describeAge(21);
describeAge(14);
describeAge(72);
describeAge(64);

// Question 9
function isLeapYear(year) {
 return (year % 4 === 0 && year % 100 !== 0 ) || (year % 400 === 0);
}

isLeapYear(2016);
isLeapYear(2015);
isLeapYear(2100); 
isLeapYear(2400);
isLeapYear(1752);
isLeapYear(1700); 

// Question 10
function multisum(num) {
  let counter =0; 
  let sum = 0;
  while (counter <= num ) {
     if (counter % 3 === 0 || counter % 5 === 0){
       sum += counter;
  } 
  counter += 1;
 }
 return sum;
}

multisum(13);
multisum(17);
multisum(1000);

// Question 11
function asciiValue (value){
  let totalVal = 0;
  for (let i= 0; i < value.length; i += 1){  
    totalVal +=  value.charCodeAt(i);
 } 
  return totalVal;
}
asciiValue("Four score");

// Question 12
function stringy(num){
  let total= "";
  for (let i =0; total.length < num ; i+= 1){
   
    if (i % 2 === 0){
      total += "1";
    } else {
      total += "0";
    }

  } return total;
}
stringy(6);
stringy(9);
stringy(7);
stringy(4);


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
