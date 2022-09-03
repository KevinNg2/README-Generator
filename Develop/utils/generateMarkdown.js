// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// created a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![Badge for License ISC](https://img.shields.io/badge/ISC-License-blue)


## Description
* ${data.description}


## Link to the app
Link to the github app:[${data.repo}](https://github.com/${data.github}/${data.repo})
Link to the github page:[${data.repo}](https://${data.github}.github.io/${data.repo}/)

## Table Of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)
-   [Badges](#badges)
-   [Contributes](#contributes)
-   [Tests](#tests)
-   [Questions](#questions)

## Installation
* ${data.installation}


## Usage
* ${data.usage}


## License
* ${data.license}

## Badges
  ![Badge for ISC License ](https://img.shields.io/badge/ISC-License-blue)

  Badges provided by [shields.io](https://shields.io/).

## Contributes
* ${data.contributes}

## Tests
* ${data.tests}


## Questions
If you have any questions feel free to reach out below:
* GitHub: [${data.github}](https://github.com/${data.github})
* Email: [${data.email}](mailto:${data.email})


`
}

module.exports = generateMarkdown