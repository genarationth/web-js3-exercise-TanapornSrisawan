// Exercise #1

// Maria has to calculate the cost of her payments for the month. 
//For every transation there is a $3 fee and a 1% (0.01) interest fee.
// Can you help her calculate her costs?

// Return the value of what she should be paying.

function cost(payment){
    const interestFee = payment * 0.01
    const transaction = payment + interestFee + 3 ;
    return transaction;
};
console.log(cost(2500));

// Exercise #2

// Part 1

function greeting(name){
    return name;
}
console.log(`Welcome ${greeting('Mai')}, ${greeting('Yeans')}, ${greeting('Ribbin')}`);
// Part 2

function age(birthYear){
    const currentYear =  new Date().getFullYear(); 
    const calAge = currentYear - birthYear;
    return calAge;
}
console.log(age(1996));

// Part 3

function welcome(name,age){
    return `Welcome  ${name}, you are ${age}` ;
};
console.log(welcome('Mai',1995));
console.log(welcome('Yeans',1998));
console.log(welcome('Ribbin',1996));

// Challenge Yourself
// A teacher wants to create a rubric for grading. The rubric is from 0 - 11.

// Part 1
// A student passes if they have a score greater than or equal to 5.
// Create a function that returns a boolean true or false. 

// Part 2
// A student has an excellent grade if they score higher than 8.
// Add on to your function to print out "Excellent" for scores greater than 8.

// Part 3
// A student has a perfect grade if their score is 11.
// Add on to your function to print out "Perfect" for a score of 11.

function grade(score){
    if (score >= 5){
        console.log('Passes');
        if(score > 8){
            console.log('Excellent');
       } else if (score === 11){
            console.log('Perfect');
        }
    }else{
        console.log('Fail'); 
    }
};
grade(6);
   

            
            
    

