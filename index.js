const inquirer = require('inquirer');
const fs = require('fs');
const {employee} = require('./lib.employee');


const officeNumber = [
    {
        type: 'input',
        message: `Enter ${this.name}'s office number.`,
        name: 'office',
    }
]

const gitHub = [
    {
        type: 'input',
        message: `Enter ${this.name}'s GitHub user name.`,
        name: 'github',    
    }
]

const school = [
    {
        type: 'input',
        message: `Enter the name of ${this.name}'s school.`,
        name: 'school',
    }
]

function init() {

    inquirer
        .prompt(employeeQuestions)
        .then((data) => {
            console.log(data);
            return data;
        })
    };

init();