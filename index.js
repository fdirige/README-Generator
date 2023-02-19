const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

const questions = [{
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
        validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
    },
    {
    type: 'input',
    message: 'What is the Description for your project?',
    name: 'description',
        validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
    },
    {
    type: 'input',
    message: 'What is the installation instructions for your project?',
    name: 'installation',
        validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
    },
    {
    type: 'input',
    message: 'What is the usage information for your project?',
    name: 'usage',
        validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
    },
    {
    type: 'input',
    message: 'What are the contribution guidlines for your project?',
    name: 'contribution',
        validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
    },
    {
    type: 'input',
    message: 'What are the test instructions for your project?',
    name: 'tests',
        validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
    },
    {
    type: 'checkbox',
    message: 'What license did you use for your project?',
    name: 'license',
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "N/A"],
        validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
    },
    {
    type: 'input',
    message: 'What is your Github username?',
    name: 'github',
        validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
    },   
]

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log ("success")
        }
    })
}

function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

init();

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is the project title?',
//             name: 'title',
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
//         },
//         {
//             type: 'input',
//             message: 'What is the Description for your project?',
//             name: 'Description',
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
//         },
//         {
//             type: 'input',
//             message: 'What is the installation instructions for your project?',
//             name: 'Installation Instructions',
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
//         },
//         {
//             type: 'input',
//             message: 'What is the usage information for your project?',
//             name: 'Usage Information',
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},
//         },
//         {
//             type: 'input',
//             message: 'What are the contribution guidlines for your project?',
//             name: 'Contribuion Guidelines',
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
//         },
//         {
//             type: 'input',
//             message: 'What are the test instructions for your project?',
//             name: 'Test Instructions',
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
//         },
//         {
//             type: 'checkbox',
//             message: 'What license did you use for your project?',
//             name: 'license',
//             choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "N/A"],
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
//         },
//         {
//             type: 'input',
//             message: 'What is your Github username?',
//             name: 'Github',
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
//         },
//         {
//             type: 'input',
//             message: 'What is your email address?',
//             name: 'Email',
//             validate: (value)=>{ if(value){return true} else {return 'Please enter a value to continue'}},   
//         }
//     ]
// );

// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// function init () {
//     inquirer.prompt(questions).then((responses) => {
//         console.log("Creating README.md File...");
//         writeToFile("", generateMarkdown({ ...responses}));
//     });
// }
// init();