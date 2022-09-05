# README.md Generator Using Node.js

## Description

Every project needs to have a high quality README file that explains the apps features. 
- What the App is used for
- How to use the App
- How to Install it
- How to Report Issues
- How to make Contributions so that other developers are more likely to use and contribute to the success of the project.

This is a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package. The application will be invoked by using node index.js.

## Link to the App
* ['README-Generator - Github'](https://github.com/KevinNg2/README-Generator)

*['Generated Sample README'](https://github.com/KevinNg2/README-Generator/blob/main/genREADME.md)

* ['README-Generator- Video Walkthrough](https://drive.google.com/file/d/1hd2DMp9wEENYoGzPqM9zfciesO74mavF/view)

GIF showing the functionality of the application


![demogif](./Develop/files/README%20Generator%20using%20Node.js.gif)




## Table Of Contents

- [README.md Generator Using Node.js](#readmemd-generator-using-nodejs)
  - [Description](#description)
  - [Link to the App](#link-to-the-app)
  - [Table Of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Badges](#badges)
  - [Contributes](#contributes)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

To generate your own README, git clone the repo from the root folder to your local repository.

Run npm install to install the following npm package dependecies as specified in the package.json:


## Usage
When you run the command node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your Github and your project. 

The application will add your responses to your Github profile. Then the application will generate markdown and a table of contents for the README based on the responses to the Inquirer prompts. The README will also include badges for your GitHub Repo.

fs.writeFile is used to generate your project's README.md file. 

## License
This application is covered by the ISC License
![Badge for License ISC](https://img.shields.io/badge/ISC-License-blue)

## Badges

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/kevinng2/readmecreator?style=flat&logo=appveyor)
![Badge for GitHub last commit](https://img.shields.io/badge/last%20commit-september%202022-blue)
![Badge for Javascript](https://img.shields.io/badge/-Javascript-yellow)
![Badge for Node.js](https://img.shields.io/badge/-Node.js-yellowgreen)
![Badge for Inquirer](https://img.shields.io/badge/-inquirer-red)
![Badge for Json](https://img.shields.io/badge/-Json-blue)
![Badge for Screencastify](https://camo.githubusercontent.com/d54408ad4380fbd4dac972ca2699da5aec0cfca076470142ab31fdab74c321bb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d73637265656e636173746966792d6c6967687467726579)

Badges provided by [shields.io](https://shields.io/).

## Contributes
Kevin Ng, UCI Coding Bootcamp

## Tests
In order to test the application you will need a text editor and your terminal open.

Inquirer will prompt you for your inputs via command line.

The application will begin by using node index.js in the command line. 

Answer the prompts in the command line to generate the README.

After answering all the prompts, the README file will be named 'README.md' and will be ready in the root of the repository.

The README will feature generated badges for your repository thru shields.io and will include your email and profile to Github. 

## Questions
Please feel free to reach out to me if you have any questions, comments, or concerns
- GitHub: [kevinng2](https://github.com/KevinNg2)
- Email: [kevinng3292@gmail.com](mailto:kevinng3292@gmail.com)


[Top](#description)
