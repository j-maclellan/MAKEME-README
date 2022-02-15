// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project's description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usage instructions for your project?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Who are the contributors for this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test your project?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license do you want to include in your README?",
        choices: ["MIT", "Apache", "GPL"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your github?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
];

// README generator
// const generateReadme = readMeArr => {
//     return `
//         # ${readMeArr.title}
//         ${readMeArr.description}
//     `

// }

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./ReadMe.md", fileContent, err => {
            if (err) {
                reject(err)
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
        .then(answers => {
            return generateMarkdown(answers);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        });
};

// Function call to initialize app
init();
