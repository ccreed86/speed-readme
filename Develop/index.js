// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What is the name of your Project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a discription of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What are your installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "What are instructions for usage?",
    },
    {
        type: "input",
        name: "credits",
        message: "Who do you need to share credit with?",
    },
    {
        type: "input",
        name: "features",
        message: "What features does your web app have, (if any)?",
    },
    {
        type: "input",
        name: "contribution",
        message: "What are your contribution guidelines?",
    },
    {
        type: "input",
        name: "test",
        message: "What test instructions can you provide (if any)?",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like for your project?",
        choices:[
            "MIT", "APACHE-2.0", "GPL-2.0", "NONE"
        ]
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is your GitHub Username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address and what instructions should be followed to reach out with additional questions?",
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
    (err) =>
    err ? console.error(err) : console.log('Your README is Ready #GETGUERO'));
    
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        const markdown = generateMarkdown(answers)
        console.log(markdown);
        writeToFile("README.md", markdown)    
        })
    }

// Function call to initialize app
init();