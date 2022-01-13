const fs = require('fs');
const inquirer = require('inquirer');

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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err): console.log('Your ReadMe has been successfully created :)')
  );
}

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
