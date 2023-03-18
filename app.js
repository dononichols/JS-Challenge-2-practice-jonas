
// Strings & Template Literals

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

// old way of writing this/ spacing issues
const jonas = "I'm" + firstName + ', a' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

// NEW WAY of writing this/ Template Literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew)

// multi-line string-using backTicks
console.log(`string
multiple
lines`);

*/


///////////////////////////////////////////
//////////////////////////////////////////
// APP to determine if a person is allowed to recieve a drivers liscense or not
// how many years left before they can test for the drivers liscense

// the less common way to write this
/*
const age = 19;
const isOldEnough = age >= 18;

if(isOldEnough) {
    console.log('you are old enough.');
} else {
    console.log('sorry, you are not old enough.')
}
*/


/*
// more common way to write this

const age = 14;

if (age >= 18) {
    console.log('Sarah can start driving.')
} else {
    const yearsLeft = 18 - age; // variable for years left
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}


///////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

const birthYear = 2015;
let century; // declared but not defined. will be defined later

if (birthYear <= 2000) {
    century = 20;

} else {
    century = 21;
}

console.log(century);
*/

/////////////////////////
// BMI using control statement

// Test Data 2: 
// Mark is 95kg and is 1.88m tall.
// John is 85kg and is 1.76m tall.


/////----------------------------

// CODING CHALLENGE #2 
///////////////////////////

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark/heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI at ${BMIMark} is higher than John's BMI at ${BMIJohn}!`)
} else {
    console.log(`Johns BMI at ${BMIJohn} is higher than Mark's BMI at ${BMIMark}!`)
}
