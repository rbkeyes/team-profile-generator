const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');

const employeeQuestions = [
    {
        type: 'input',
        message: `Enter employee's name.`,
        name: 'name',
    }, {
        type: 'input',
        message: `Enter employee id.`,
        name: 'id',
    }, {
        type: 'input',
        message: `Enter employee's email address.`,
        name: 'email',
    } 
]

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