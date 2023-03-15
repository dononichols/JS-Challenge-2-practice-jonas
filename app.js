
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

// more common way to write this

const age = 14;

if (age >= 18) {
    console.log('Sarah can start driving.')
} else {
    const yearsLeft = 18 - age; // variable for years left
    console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}
