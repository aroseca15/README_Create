const fs = require('fs');
// const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);
const inquirer = require('inquirer');
let markDown = '';

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your Project title?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Please add deployment link:',
        name: 'deploy'

    },

    {
        type: 'input',
        message: 'Please describe you app or project:',
        name: 'description'

    },

    {
        type: 'confirm',
        message: 'Would you like to add a screenshot or GIF?',
        name: 'screenGIFcon'

    },
    
    {
        type: 'input',
        message: 'Please paste your screenshot or GIF link:',
        name: 'screenGIF'

    },

    {
        type: 'input',
        message: 'Please enter installation instructions:',
        name: 'install'

    },

    {
        type: 'input',
        message: 'How is the app used?',
        name: 'useage'

    },

    {
        type: 'input',
        message: 'Who worked on this project with you?',
        name: 'creators'

    },

    {
        type: 'input',
        message: 'What test program did you use?',
        name: 'test'
    },

    {
        type: 'list',
        message: 'Please select a license:',
        choices: ["Apache", "MIT", "GNU GPLv3", "ISC"],
        name: 'license'
    },

    {
        type: 'input',
        message: 'Please enter your Github Username:',
        name: 'Github'

    },

    {
        type: 'input',
        message: 'Please paste you linkedin link:',
        name: 'linkedin'

    },

    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email'

    },

    {
        type: 'input',
        message: 'Please complete the sentence and enter new information if needed; Best contacted via:',
        name: 'contact'

    },

]).then(function(res) {

    if(res.screenGIFcon == false){
        
        markDown = 
`# ${res.title} 

## Description:
${res.description}

### Deployment Link: ${res.deploy}


# Table of Contents:
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Test)
* [Profiles](#Professional-Profiles-&-Email)
* [Contact for Questions](#Contact-for-Questions)
    
## Installation:
${res.install}

## Usage:
${res.useage}

## License:
![License](https://img.shields.io/badge/License-${res.license}-green.svg)

## Tested With:
${res.test}

## Professional Profiles and Email:
${res.Github}
${res.linkedin}
${res.email}

## Contact for Questions:
For answers to any further questions please contact me via: ${res.contact}`
    } else{
        markDown = 
`# ${res.title} 

## Description:
${res.description}

### Deployment Link: ${res.deploy}

### Screenshots or GIFS: ${res.screenGIF}


# Table of Contents:
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Test)
* [Profiles](#Professional-Profiles-&-Email)
* [Contact for Questions](#Contact-for-Questions)
    
## Installation:
${res.install}

## Usage:
${res.useage}

## License:
![License](https://img.shields.io/badge/License-${res.license}-green.svg)

## Tested With:
${res.test}

## Professional Profiles and Email:
${res.Github}
${res.linkedin}
${res.email}

## Contact for Questions:
For answers to any further questions please contact me via: ${res.contact}`
    }
    
    
    // [License](https://opensource.org/licesnes/${re.license})
    fs.writeFile('README.md', markDown, function(){
        console.log('Your README is Completed!')
    })
});



// async function write() {
//     try {
//         const response = await inquirer.prompt();
//         // const newReadMe = generateReadMe(response);

//         await writeFileAsync('README.md', newReadMe);
//         console.log("Your ReadMe is Completed!");
//     }catch(error) {
//         console.log("Something Went Wrong!", error)
//     }
// };

// write();

