// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ``;
  } else {
    return `See more badges at [shields.io](https://img.shields.io/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return `
    ## License
    ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, installation, usage, contribution, tests, license, github, email } = data;
  return `
  # ${title}
  ${renderLicenseBadge(license)}

  ${renderLicenseLink(license)}
  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributors](#contributors)

  ## Installation
  ${installation}

  ## Usage
  ${usage}
  
  ## Tests
  ${tests}
  
  ## Contributors
  * ${contribution}
  
  ${renderLicenseSection(license)}
  
  ## Questions
  For any questions, please contact me through:
  * [GitHub](https://github.com/${github})
  * [Email](${email})
  `;
}

module.exports = generateMarkdown;
