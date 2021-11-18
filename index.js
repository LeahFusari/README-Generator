// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const {writeFile} = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of the project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose which licences your project has.',
        choices: ['MIT', 'Other1', 'Other2','Other3','Other4']
        // what other licenses are there?????
    },
    {
        type: 'input',
        name: 'install',
        message: 'What steps are needed to install this project?'
        // What steps ARE needed, anyway???
    },
    {
        type: 'input',
        name: 'useage',
        message: 'How does one use this app?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?'
        // not sure what this even means??
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What are the contribution guidelines?'
        // not sure what this even means??
    }
    ]);
    
};


questions()


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
