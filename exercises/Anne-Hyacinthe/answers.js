// Question 1
function greet(name) {
 return (`Good morning, ${name}!`);
}

// Question 2
function logOddNumbers() {
  for(i = 1; i <= 99; i += 1)
    if (i % 2 !== 0){
      console.log(i);
    }
}

// Question 3
function area(length, width) {
 return length * width;
  
}

// Question 4
function otherAngle(angle1, angle2) {
  let MissingAngle = 180 - (angle1 + angle2)
  return MissingAngle
}

// Question 5
function diameterFromArea(area) {
   let radius2;
  radius2 = area / Math.PI ;
  let x;
  x= Math.sqrt(radius2)
  let diameter = x * 2 ;
  return diameter;
}

// Question 6
function totalPrice(cost, tax) {
  percent = cost / 100;
  per = tax * percent;
  total = per + cost;
  return(total);
}

// Question 7
function shortLongShort(e,y) {
   if (e.length > y.length) {
    return (y+e+y)
  } else if (y.length > e.length){
    return (e+y+e)
  }
  
  
}

// Question 8
function describeAge(age) {
  if (age <= 12) {
    return "You're a kid";
  }else if (13 <= age && age <= 17){
    return "You're a teenager";
  } else if (18 <= age && age <= 64){
    return "You're an adult";
  } else {
    return "You're an eldely";
  }


}

// Question 9
function isLeapYear(year) {
if (year === 0){
  return(false);
}
else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0 ){
  return(true);
} 
else if (year % 4 === 0 && year % 100 === 0){
  return(false);
}else if (year % 4 === 0){
  return(true)
}else {
    return(false)
  }   
}

// Question 10
function multisum() {
}

// Question 11
function asciiValue(word) {
 let value = 0;
  for (let i = 0; i < word.length; i += 1) {
    value += word.charCodeAt(i);
  } 
  return value 
}

// Question 12
function stringy(num) {
  let string= "" ;
  for (let i = 0; i <= num - 1; i += 1){
    if(i %2 === 1){
      string += '0';
    }else{
      string += '1';  
    }    
  }
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
  multisum,
  asciiValue,
  stringy,
};
