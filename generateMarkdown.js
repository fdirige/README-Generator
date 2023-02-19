// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  # Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contribution](#contribution)
  [Test Instructions](#tests)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  This project is licensed under the ${data.license} license. 
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  # Contributing
  ​Contributors: ${data.contribution}
  # Questions
  Github: [${data.github}](https://github.com/${data.github}) Email: ${data.email}.
  `
}

module.exports = generateMarkdown;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// function generateMarkdown(data) {
// return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;