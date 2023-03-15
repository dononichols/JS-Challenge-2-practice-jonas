
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