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
// Ed would like a way to input 3 names of his friends.
// The output should be a console greeting to his friends saying: 
// `Welcome {name1}, {name2}, {name3}.`

function greeting(name1, name2, name3){
    console.log("Welcome "+ name1 + ", " + name2 + "," + name3);
}
greeting('Ribbin','Mind','Bass');

// Part 2
// Ed would like to create a function that takes in a birth year and returns the age.
// i.e. 1990 returns 30

function age(birthYear){
    const calAge = 2023 - birthYear  ;
    return calAge;
}
console.log(age(1996));

// Part 3
// Ed would like to create a function that prints out,
// `Welcome {name1}, you are {age1}. Welcome {name2}, 
// you are {age2}. Welcome {name3}, you are {age3}.
function welcome(name_1,age_1,name_2,age_2,name_3,age_3){
    console.log(`Welcome ${name_1}, you are ${age_1}. Welcome ${name_2}, you are ${age_2}.Welcome ${name_3}, you are ${age_3}.`);
};
welcome('Ribbin',27,'Phase',28,'Yuki',31);

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
   

            
            
    

