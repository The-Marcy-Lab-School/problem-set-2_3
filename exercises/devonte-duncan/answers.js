let greet = function(user){
    return "Good morning," + " " + user + "!";
};



let logOddNumbers = function(){
    let counter = 0;
    while(counter <= 99){
        counter += 1;
        if (counter % 2 !== 0){
            console.log(counter);
        }
    }
};


let area = function(length, width){
   let surfaceArea = length * width;
   return surfaceArea; 
};



let otherAngle = function(angleOne, angleTwo){
    let angleThree;
    angleThree = 180 - (angleOne + angleTwo);
    return angleThree;
};



let diameterFromArea = function(area){
    let diameter = (2* Math.sqrt(area/Math.PI));
    alert(diameter);
    return diameter;
};



let totalPrice = function(subtotal, tax){
   let total;
   tax_amount = subtotal * (tax / 100);
   total = tax_amount + subtotal;
   
   return total;
};

let shortLongShort = function(stringOne, stringTwo){
    
    let stringOutput;
    
    if(stringOne.length <= stringTwo.length){
        
        stringOutput = stringOne + stringTwo + stringOne;
    }else{
        stringOutput = stringTwo + stringOne + stringTwo;
        
    }
    return stringOutput;
};

let describeAge = function(age){
    
   let desc =  age <= 12 ? "You're a kid."  //Tests if age is a kids age
   :age <= 17 ? "You're a teenager."        //Tests if age is a teenager age
   :age <= 65 && age >= 18  ? "You're an adult."  //Tests if age is a adult age
   : "You're an elderly.";                       //Tests if age is elderly age
   return desc;
    
};

let isLeapYear = function(year){
   if(year % 4 === 0 && year % 100 !== 0){
       return true;
   }else if(year % 100 === 0 && year % 400 !== 0){
       return false;
   }else if(year % 4 === 0){
       return true;
   }else{
       return false;
   }
};

let multisum = function(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
      
       if(i % 3 === 0 || i % 5 === 0){
         sum = sum + i;  
       }
      }
       return sum;
    };
    
    let asciiValue = function(string){
    let sum = 0;
    let asciiValues;
    
        for(let i = 0; i <= string.length - 1; i++){
          asciiValues = string.charCodeAt(i)
          sum = sum + asciiValues;
          }
        return sum;
};

let stringy = function(maxLength){
    let string = "";
    
        for(let i = 1; i < maxLength*0.5 + 1 ; i++){
          
          string = string + "1";
          
        if(string.length < maxLength){
            
           for(let j = 0; j < 1; j++){
            
             string = string + "0";
          }
         }
        }
    
    return string;
};


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