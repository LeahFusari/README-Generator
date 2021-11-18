// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const {writeFile} = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
// const questions = () => {
    // return 
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the developer?'
    }
    ])
    .then(answer => console.log(answer));
// }




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
