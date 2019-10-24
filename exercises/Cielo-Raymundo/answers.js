// Question 1
function greet(name) {
  let answer=name;
  return(`Good morning, ${answer}!`);
}

// Question 2
function logOddNumbers() {
  for(let i=1; i<100;i++){
    if(i%2!=0){
      console.log(i);
    }
  }
}

// Question 3
function area(length, width) {
  return length*width;
}

// Question 4
function otherAngle(angle, angle2) {
  let angle3;
  if(angle>0&&angle2>0){
    angle3= 180-(angle + angle2);
  }
  return angle3;
}

// Question 5
function diameterFromArea(area) {
  let term1=area/Math.PI;
  let diameter = 2*(Math.sqrt(term1));
  return diameter;
}

// Question 6
function totalPrice(price, tax) {
  let totalTax= (price * tax)/100;
  let total= totalTax+price;
  return total;
}

// Question 7
function shortLongShort(string1, string2) {
  let long="";
  let short="";
  if (string1.length>string2.length){
    long = string1;
    short=string2;
  }else{ 
    short=string1;
    long=string2;
  }
  return (`${short}${long}${short}`);
}

// Question 8
function describeAge(age) {
  return(age<=12? "You're a kid.": age>=13&&age<=17? "You're a teenager.":age>=18&&age<=64? "You're an adult.":"You're an elderly.");
}

// Question 9
function isLeapYear(year) {
  if(year>0){
    return (year%4===0&&year%100!==0? true: year%100===0&& year%400===0? true: false);
  }
}

// Question 10
function multisum(num) {
  let total=0;
  for (let i=0;i<=num;i++){
    if(i%3===0||i%5===0){
      total+=i;
    }
  }
  return total;
}

// Question 11
function asciiValue(string){
  let total=0;
  for (let i=0;i<string.length;i++){
    total+= string.charCodeAt(i);
  }
  return total;
}

// Question 12
function stringy(length) {
  // write your answer to question one below
  let count=1;
  let string='';
  length+=1;
    
  while(count<length){
    if(count%2==0){
      string+='0';
      count+=1;
    }else{
      string+='1';
      count+=1;
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
