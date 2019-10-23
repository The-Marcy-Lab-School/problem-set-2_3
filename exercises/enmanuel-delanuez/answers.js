// Question 1
function greet(name) {
  console.log('Good morning, ' + name+'!');
}

// Question 2 --change 99 to a parameter for expandability
function logOddNumbers() {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

//let area = (w, h) => w * h;
// Question 3
function area(w, h) {
  return w * h;
}

//let otherAngle = (angOne, angTwo) => (180 - (angOne + angTwo));
// Question 4
function otherAngle(angOne, angTwo) {
  return (180 - (angOne + angTwo));
}

//let diameterFromArea = (area) => 2 * (Math.sqrt(area / Math.PI));
// Question 5
function diameterFromArea(area) {
  return 2 * (Math.sqrt(area / Math.PI));
}


//let totalPrice = (gross, tax) => gross + (gross * (tax / 100));
// Question 6
function totalPrice(gross, tax) {
  return gross + (gross * (tax / 100));
}

// Question 7
function shortLongShort(strngOne, strngTwo) {
  let final = ''
  if (strngOne.length < strngTwo.length) {
    final = strngOne + strngTwo + strngOne;
  } else {
    final = strngTwo + strngOne + strngTwo;
  }
  return final;
}

// Question 8
function describeAge(age) {
  return age < 12 ? "You're a(n) kid": age > 11 && age <18 ? "Your're a(n) teenager": age >= 18 && age <= 64 ? "You're a(n) adult": "You're an elderly";
}

// // Question 9
function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0) ? true : false
}

// Question 10
function multisum(max) {
  let finalsum = 0;
  for (let i = 1; i <= max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        finalsum += i;
    }
  }
  return finalsum;
}

// Question 11
function asciiValue(string) {
  let finalSum = 0;
  for (let i = 0; i < string.length; i++) {
    finalSum += string.charCodeAt(i);
  }
  return finalSum; 
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
