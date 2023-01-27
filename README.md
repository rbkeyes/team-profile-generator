# Team Profile Generator

![GitHub language count](https://img.shields.io/github/languages/count/rbkeyes/team-profile-generator?color=magenta)
![GitHub top language](https://img.shields.io/github/languages/top/rbkeyes/team-profile-generator)
![repo License](https://img.shields.io/github/license/rbkeyes/team-profile-generator?color=purple)


## Description

A command line application that uses node.js and npm inquirer to gather information about a series of team members, and generates an html file containing a well-formatted, easy-to-read team roster. Each role has a different series of prompts designed to gather specific information relevant to each team member.

This application was designed to provide a simple way for an employer to easily add and keep track of relevant information about their team. 

In building this application, I was able to gain a better understanding of asynchronous programming and class constructors. It also provided good practice writing tests using jest.js. 


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)


## Installation

To use this program, you must first install [node.js](https://nodejs.org/en/)).

Next you will install the [inquirer](https://www.npmjs.com/package/inquirer) npm. 

To run tests, install [jest](https://jestjs.io/docs/getting-started).


## Usage

To start the application, open an integrated terminal and run 
```
node index
```
in the command line. Follow the prompts and enter the requested information, starting with team manager. Once all members of the team have been added, select "Finish building my team" and an HTML file titled ```teamProfiles.html``` will be written and added to the ```dist``` directory. 

[GitHub repository](https://github.com/rbkeyes/team-profile-generator)


## Credits

Coursework from coding bootcamp heavily referenced while building this app, along with the following resources:

- [css reset](https://piccalil.li/blog/a-modern-css-reset/)
- [inquirer docs](https://www.npmjs.com/package/inquirer/v/8.2.4)
- [JEST docs](https://jestjs.io/docs/getting-started)


## License

[MIT license](./LICENSE)



## Tests

Tests for the class modules Employee, Manager, Engineer, and Intern can be found in the ```_test_``` directory. Tests are run using jest.js - see [documention](https://jestjs.io/) for installation and usage. To run tests, enter 
```
npm test
``` 
in the command line.