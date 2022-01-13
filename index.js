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
        message: 'What is your project about?',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'How would you install this?',
        name: 'install',
      },
      {
        type: 'input',
        message: 'What is this used for?',
        name: 'use',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contrib',
      },
      {
        type: 'input',
        message: 'How would you test this?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'GitHub URL?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Contact Email?',
        name: 'email',
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
      userData = generateMarkdown(answers);
      writeToFile('projects.md', userData)
      console.log(answers);
    })
}

function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description
${answers.bio}

## Installation
${answers.install}

## Usage
${answers.use}

## Contributing
${answers.contrib}

## Tests
${answers.test}

## Questions?
GitHub
${answers.github}
Email
${answers.email}

## License
[MIT](https://choosealicense.com/licenses/mit/)
  `
}

// Function call to initialize app
init();
