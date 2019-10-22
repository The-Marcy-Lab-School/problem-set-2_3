// Question 1
function greet(greet) {
  console.log(`Good Morning ${greet}!`);
}

// Question 2
function logOddNumbers() {
    let num = 1;
    while(num<=99){
      if(num % 2 === 0){
        num++
      }
      else{
        console.log(num);
        num++
      }
  }
}

// Question 3
function area(length,width) {
    console.log(length * width);
}

// Question 4
function otherAngle(first,second) {
    let total= 180;
    total -= first + second;
    if(total >= 1){
      console.log(total);
    }
    else{
      console.log("No");
    }
}

// Question 5
function diameterFromArea(area) {
  return 2 * Math.sqrt((area/Math.PI));
}

// Question 6
function totalPrice(price,percent) {
  percent = percent/100;
  percent = price * percent;
  price = price + percent
  return price;
}

// Question 7
function shortLongShort(str1,str2) {
  let string = "";
   if(str1.length > str2.length){
     string = str2 + str1 + str2;
     return string
   }
   else{
     string = str1 + str2 + str1;
     return string
   }
}

// Question 8
function describeAge(age) {
  let desc = (age <= 12) ? "You're a kid!" : (age >= 13 && age <= 17) ? "You're a teenager!" : (age >= 18 && age <= 64) ? "You're an adult!" : "You're an elder!";
  return desc;
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
  let i = 1;
  let sum = 0;
  while(i <= num){
    if( i % 3 ===0 || i % 5 === 0){
     sum += i 
     i++
  }
  else{
    i++
  }
}
  return sum;
}

// Question 11
function asciiValue(string) {
  let str= 0;
  for (let i = 0; i < string.length; i++) {
      str += string.charCodeAt(i);
  }
  console.log(str);
}

// Question 12
function stringy(num) {
  let key = 1;
  let str = ""
  while(key <= num){
    if( key % 2 === 0){
      str += "0"
      key++
    }
    else{
      str += "1"
      key++
    }
  }
  console.log(str);
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
