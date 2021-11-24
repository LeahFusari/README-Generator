// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const createReadMe = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub name?'
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
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Do you have any Licenses for this project?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose which licences your project has.',
        choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause'],
        when: ({confirmLicense}) => {
            if (confirmLicense) {
              return true;
            } else {
              return false;
            }
          }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What steps are needed to install this project?'
        // What steps ARE needed, anyway???
    },
    {
        type: 'input',
        name: 'usage',
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
    //     // not sure what this even means??
    }
    ]) 
    // .then(function(answers){
    //     console.log(answers);
    // });
}





// // TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// // TODO: Create a function to initialize app
const init = () => {
    questions()
    .then(answers =>{
        return createReadMe(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
