// Question 1
function greet(name) {
  console.log("Good morning, " + name);
}
greet("Carmen");
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
function area (length, width){
  length;
  width;
  let area = length * width;
  return(area);
}

area(5, 15);
area(15, 10);
area(25.75, 42);


// Question 4
let triangle = function(angle1 , angle2){
  let degree = angle1 + angle2;
  let angle3 = 180 - degree;
  console.log(angle3);
  return angle3;
  
}

triangle(30, 60);
triangle(60, 60);
triangle(43, 78);
triangle(10, 20);

// Question 5
function diameterFromArea(num){
 let diameter = 2 * Math.sqrt(num / Math.PI);
  console.log(diameter);
  return diameter;
  
}

diameterFromArea(10);
diameterFromArea(100);

// Question 6
function totalPrice() {

}

// Question 7
function shortLongShort() {

}

// Question 8
function describeAge() {

}

// Question 9
function isLeapYear() {

}

// Question 10
function multisum() {

}

// Question 11
function asciiValue() {

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
