const inquirer = require('inquirer');
const fs = require('fs');

const employeeInfo = [
    {
        type: 'input',
        message: `Enter the ${this.role}'s name.`,
        name: 'name',
    }, {
        type: 'input',
        message: `Enter ${this.name}'s employee id.`,
        name: 'name',
    }, {
        type: 'input',
        message: `Enter ${this.name}'s email address.`,
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