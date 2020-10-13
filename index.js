const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        question: 'What is your Project title?',
        title: 'title'
    },

    {
        type: 'input',
        question: 'Please add deployment link:',
        deploy: 'deploy'

    },

    {
        type: 'input',
        question: 'Please describe you app or project:',
        descritption: 'description'

    },

    {
        type: 'confirm',
        question: 'Would you like to add a screenshot or GIF?',
        screenGIFcon: 'screenGIFcon'

    },
    // How to link if I say yes to next screenshot input. If no, Next other question?
    {
        type: 'input',
        question: 'Please paste your screenshot or GIF link:',
        screenGIF: 'screenGIF'

    },

    {
        type: 'input',
        question: 'Please enter installation instructions:',
        install: 'install'

    },

    {
        type: 'input',
        question: 'How is the app used?',
        useage: 'useage'

    },

    {
        type: 'input',
        question: 'Who worked on this project with you?',
        creators: 'creators'

    },

    {
        type: 'input',
        question: 'What test program did you use?',
        test: 'test'
    },

    {
        type: 'list',
        question: 'Please select a license:',
        choices: ["Apache", "MIT", "GNU GPLv3", "ISC"],
        license: ''
    },

    {
        type: 'input',
        question: 'Please enter your Github Username:',
        Github: 'Github'

    },

    {
        type: 'input',
        question: 'Please paste you linkedin link:',
        linkedin: 'linkedin'

    },

    {
        type: 'input',
        question: 'Please enter your email address:',
        email: 'email'

    },

    {
        type: 'input',
        question: 'Please complete the sentence and enter new information if needed; Best contacted via:',
        contact: 'contact'

    },

]).then(function generateReadMe(res) {
    return `#${res.title} 

    ##Description:
    ${res.descritption}

    ###Deployment Link: ${res.deploy}
    
    
    #Table of :
    [Installation](##Installation)
    [Usage](##Usage)
    [Contributing](##Contributing)
    [Test](##Test)
    [Profiles](##Professional Profiles & Email)
    [Contact for Questions](##Contact for Questions)
    
    ## Installation:
    ${res.install}

    ##Usage:
    ${res.useage}

    ##License:
    [![License](https://img.shields.io/badge/License-${res.license}-blue.svg "Badge")

    ##Tested With:
    ${res.test}

    ##Professional Profiles and Email:
    ${res.Github}
    ${res.linkedin}
    ${res.email}

    ##Contact for Questions:
    For answers to any further questions please contact me via: ${res.contact}
    `
    // [License](https://opensource.org/licesnes/${re.license}) Do I need this?
});

async function write() {
    try {
        const response = await inquirer.prompt();
        const newReadMe = generateReadMe(response);

        await writeFileAsync('README.md', newReadMe);
        console.log("Your ReadMe is Completed!");
    }catch(error) {
        console.log("Something Went Wrong!")
    }
};

write();

