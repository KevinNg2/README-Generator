// declared imports for application to run 
const inquirer = require('inquirer');
const fs = require ('fs');
const path = require ('path');
const generateMarkdown = require ('./Develop/utils/generateMarkdown');

// Array of questions for user input to create README

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title called?",
        // readmegenerator
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project.",
        // this is a project that uses node.js that auto generates a readme file from gitbash/terminal 
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?",
        // NPM installation, dependencies + inquirer
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions how on to complete this project. ",
        // Run node index.js at the root of your project and answer the prompted questions
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does this repository use?",
        choices: ["afl-3.0", "wtfpl", "isc", "mit", "osl-3.0"],
        // ISC
    },
    {
        type: "input",
        name: "contributes",
        message: "Share contributors with links to their Github Profiles.",
        // TA's, tutors, w3school, youtube, google
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide instructions to the user reading your ReadMe on how to test your app."
        // A text editor and terminal will need to be open. Inquirer will prompt you for your inputs. Run node index.js in command line. Answer prompts
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        // kevinng2
    },
    {
        type: "input",
        name: "email",
        message: "Please provide your email address.",
        // kevinnng3292@gmail.com
    },
    {
        type: "input",
        name: "repo",
        message: "What is the name of your GitHub repo?",
        
    },

]


// function that executes README file
function writeFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initalize application
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log("generateReadme")
        writeFile("genREADME.md", generateMarkdown({...inquirerResponses }))
    })
}

// function call to initalize app
init()
    