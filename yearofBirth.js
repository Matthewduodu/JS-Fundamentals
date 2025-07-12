const readline = require('readline');

// Create readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for user's name
rl.question("What is your name? ", (name) => {
  rl.question("How old are you? ", (age) => {
    const currentYear = new Date().getFullYear();
    const ageNumber = parseInt(age);

    if (!isNaN(ageNumber)) {
      const birthYear = currentYear - ageNumber;
      console.log(`Hello, ${name}! You were born in ${birthYear}.`);
    } else {
      console.log("Please enter a valid number for age.");
    }

    rl.close(); // End input session
  });
});
