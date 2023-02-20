// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// Function to genereate markdown
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  # Description
  ${data.description}
  # Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribution](#contribution)
  5. [Instructions](#Instructions)
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # License
  This project is licensed under the ${data.license} license. 
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  # Contribution
  ${data.contribution}
  # Instructions
  ${data.testInstructions}
  # Questions
  Github: [${data.github}](https://github.com/${data.github}) Email: ${data.email}.
  `
}

module.exports = generateMarkdown;