// Question 1
function greet(name) {
  return `Good Morning ${name}`;
}

// Question 2
function logOddNumbers() {
  for(i = 1; i <= 99; i++){
    console.log(i);
  }
}

// Question 3
function area(length, width) {
  return length * width;
}

// Question 4
function otherAngle(first_angle, second_angle){
  return 180 - (first_angle + second_angle);
}

// Question 5
function diameterFromArea(area){
  return 2 * (Math.sqrt((area/Math.PI)));
}

// Question 6
function totalPrice(bill, tax){
  return bill + (bill * (tax/100));
}

// Question 7
function shortLongShort(first, second) {
  if (first.length > second.length){
    return(second + first + second)
  }
  else{
    return(first + second + first)
  }
}

// Question 8
function describeAge(age){
  let message = "";
  return age <= 12 ? "You're a kid": age <=17 ? "You're a teenager" :  age <= 64 ? "You're an adult":  age >= 65 ? "You're an elderly": false
  
}

// Question 9
function isLeapYear(year) {
  return ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0? true: false);
}

// Question 10
//function multisum(){}


// Question 11
function asciiValue(word){
  let total = 0;
  for(let i = 0; i < word.length; i++){
    total += word.charCodeAt(i);
  }
  return total;
}

// Question 12
function stringy(num) {
  for(let i = 0; i < num; i++){
    let row = "";
    let col = 0;
    while(col < num){
      if((col % 2) == 0 ){
        row += "1";
        col += 1; 
      }
      else{
        row += "0";
        col += 1;
      }
    }
    console.log(row);
  }
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
