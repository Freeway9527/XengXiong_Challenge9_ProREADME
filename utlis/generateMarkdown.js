const inquirer = require("inquirer");
const fs = require("fs");
const index = require("../index");

//function to create badge
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '![Static Badge](https://img.shields.io/badge/License-MIT-blue)';
    }
    if (license === 'GNU General Public License v3.0') {
      return '![Static Badge](https://img.shields.io/badge/License-GNU.v3.0-blue)';
    }
    if (license === 'Mozilla Public License 2.0') {
      return '![Static Badge](https://img.shields.io/badge/License-MPL%202.0-blue)';
    }
    if (license === 'Apache License 2.0') {
      return '![Static Badge](https://img.shields.io/badge/License-Apache%202.0-blue)';
    }
    if (license === 'GNU Affero General Public License v3.0') {
      return '![Static Badge](https://img.shields.io/badge/License%20-GNU%20AGPL%20v3.0-blue)';
    }
    if (license === 'Eclipse Public License') {
      return '![Static Badge](https://img.shields.io/badge/License%20-Eclipse%20Public-blue)';
    }
    if (license === 'Unlicense'){
      return '';
    }
  }


// Function to write content to a file
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)} 

## Description
${data.description}


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Tests](#tests)
4. [Credits](#credits)
5. [Contribution](#contribution)
6. [License](#license)
7. [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.test}

## Credits
${data.credits}

## Contribution
${data.contribution}

## License
This project is licensed under the ${data.license}.


## Contact
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}

`;
}

module.exports = generateMarkdown;

