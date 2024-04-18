// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
    return '[![License-MIT](https://img.shields.io/badge/License-MIT-blue)]'
    break;
    
    case 'APACHE-2.0':
    return '[![License-APACHE_2.0](https://img.shields.io/badge/License-APACHE_2.0-green)]'
    break;
    
    case 'GPL-2.0':
    return '[![License-GPL_2.0](https://img.shields.io/badge/License-GPL_2.0-purple)]'
    break;
    
    default:''


}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
    return 'https://opensource.org/license/mit'
    break;
    
    case 'APACHE-2.0':
    return 'https://opensource.org/license/apache-2-0'
    break;
    
    case 'GPL-2.0':
    return 'https://opensource.org/license/gpl-2-0'
    break;
    
    default:''

}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return 
  ` 
# ${data.projectName}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features]
- [Contributing]
- [Tests]

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## Features

${data.features}

## Contributing

${data.contribution}

## Tests

${data.test}

`;

}

module.exports = generateMarkdown;
