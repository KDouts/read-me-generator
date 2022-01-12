// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your propject about?',
        name: 'bio',
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err): console.log('Your ReadMe has been successfully created :)')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      const userData = answers;
      writeFile('projects.md', userData)
      console.log(answers);
    })
}

// Function call to initialize app
init();
