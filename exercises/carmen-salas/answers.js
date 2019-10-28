// Question 1
function greet(userName) {
  return "Good morning, " + userName + "!";

}

// Question 2
function logOddNumbers() {
  for(let i = 0; i <= 99; i++)
  if(i % 2 ==! 0){
    console.log(i);
  }else{
    
  }

}

// Question 3
function area(x, y) {
  return (x * y); 
}

// Question 4
function otherAngle(angle1, angle2) {
  let angles = angle1 + angle2; 
  return (180 - angles); 

}

// Question 5
function diameterFromArea(area) {
  let divide = (area / Math.PI);
  let root = Math.sqrt(divide);
  let diameter = (root * 2); 
  return diameter;
}


// Question 6
function totalPrice(price, tax) {
  return( ((tax/100) * price) + price );
}

// Question 7
function shortLongShort(string1, string2) {
  if(string1.length < string2.length){
    return (string1 + string2 + string1);
  }else if(string1.length > string2.length){
    return (string2 + string1 + string2);
  }

}

// Question 8
function describeAge(age) {
  if(age <= 12){
    return ("You're a kid.");
  }else if(age >= 13 && age <= 17){
    return ("You're a teenager.");
  }else if(age >= 18 && age <= 64){
    return ("You're an adult.");
  }else if(64 < age){
    return ("You're an elderly.");
  }
}

// Question 9
function isLeapYear(year) {
  return(((year % 4 === 0 )&&(year % 100 != 0))||(year % 400 == 0) ? true: false);

}

// Question 11
function asciiValue(string) {
  let answer = 0;
  for( let i = 0; i < string.length; i++){
    answer += string.charCodeAt(i)
  }
  return answer;
}

// Question 12
function stringy(num) {
  let i = 0;
  let string = "";

  do {  
    if (i % 2 == 0){
      let addOne = string + "1";
      string = addOne
      i = i + 1
    }else{
      let addZero = string + "0";
      string = addZero
      i = i + 1
    }
    
  } while (i < num);
   return string; 

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
  asciiValue,
  stringy,
};
