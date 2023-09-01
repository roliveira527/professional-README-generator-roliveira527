const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of your project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'Other'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ];

// function to write README file
function writeToFile(fileName, data) {
    const outputPath = path.join(process.cwd(), fileName);
  
    fs.writeFile(outputPath, data, (err) => {
      if (err) {
        console.error('Error writing README:', err);
      } else {
        console.log(`${fileName} has been generated successfully.`);
      }
    });
  }
  
  // function to initialize program
  function init() {
    inquirer.prompt(questions).then((answers) => {
      // Generate the README using the collected answers
      const readmeContent = generateMarkdown(answers);
      
      // Write the README content to a file (e.g., 'README.md')
      writeToFile('README.md', readmeContent);
    });
  }
  
  // function call to initialize program
  init();
