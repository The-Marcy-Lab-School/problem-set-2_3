let user;
let counter = 0;
let angleThree;
let total;
let taxRate;
let stringOutput;

function greet(user){
    user = prompt("What is your name?");
    alert("Good morning" + " " + user);
}



function logOddNumbers(){
    while(counter <= 99){
        counter += 1;
        if (counter % 2 !== 0){
            console.log(counter);
        }
    }
}



function findArea(length, width){
   length = prompt("What is the length?");
   width = prompt("What is the width?")
   let area = (+length) * (+width);
   alert(area);
   return area; 
}



function otherAngle(angleOne, angleTwo){
    angleOne = +prompt("What is the first angle?");
    angleTwo = +prompt("What is the second angle");
    angleThree = 180 - (angleOne + angleTwo);
    alert(angleThree);
    return angleThree;
}



function diameterFromArea(area){
    area = +prompt("What is the area of the circle?");
    let diameter = (2* Math.sqrt(area/Math.PI));
    alert(diameter);
    return diameter;
}



function totalPrice(subtotal, tax){
   taxRate = 8/100;
   subtotal = +prompt("What is your subtotal?");
   tax = subtotal*taxRate;
   total = tax + subtotal;
   alert("Your total is : $" + total);
   return total;
}

function shortLongShort(stringOne, stringTwo){
    stringOne = prompt("Type anything!");
    stringTwo = prompt("Type anything one more time!");
    
    if(stringOne.length <= stringTwo.length){
        
        stringOutput = stringOne + stringTwo + stringOne;
    }else{
        stringOutput = stringTwo + stringOne + stringTwo;
        
    }
    alert(stringOutput);
    return stringOutput;
}

function describeAge(age){
    age = +prompt("What is your age?");
    
    age <= 12 ? alert("You're a kid.")
   :age <= 17 && age > 12 ? alert("You're a teen")
   :age => 18 && age < 65 ? alert("You're an adult")
   :alert("You're elderly");
    
    
}

describeAge();

