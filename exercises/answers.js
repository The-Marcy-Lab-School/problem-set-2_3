//1
function greet (name) {
  // name = name.charAt(0).toUpperCase(); why is this not working? Will check again later!
  console.log('Good morning, ' + name+'!');
}

//2
function logOddNumbers (max) {
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

//3
let area = (w, h) => w * h;

//4
let otherAngle = (angOne, angTwo) => (180 - (angOne + angTwo));

//5
let diameterFromArea = (area) => 2 * (Math.sqrt(area / Math.PI));

//6
let totalPrice = (gross, tax) => gross + (gross * (tax / 100));

//7 Determine the longest, return the result of concatenating the shorter string, the longer string, and the shorter string again.
function shortLongShort (strngOne, strngTwo) {
  let final = ''
  if (strngOne.length < strngTwo.length) {
    final = strngOne + strngTwo + strngOne;
  } else {
    final = strngTwo + strngOne + strngTwo;
  }
  return final;
}

//8 
function describeAge (age) {
  return age < 12 ? "You're a(n) kid": age > 11 && age <18 ? "Your're a(n) teenager": age >= 18 && age <= 64 ? "You're a(n) adult": "You're an elderly"
}

//9
function isLeapYear (year) {
  return year % 100 === 0 ? year = true : 
}