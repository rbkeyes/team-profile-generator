// inquirer
const inquirer = require('inquirer');
// fs
const fs = require('fs');

// constructors
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// other variables
const employees = [];

const selectRole =
{
    type: 'list',
    message: 'Select employee role from list below:',
    choices: ['engineer', 'intern',],
    name: 'role'
};

const employeeQuestions = [
    {
        type: 'input',
        message: `Enter employee's name.`,
        name: 'name',
    }, {
        type: 'number',
        message: `Enter employee id.`,
        name: 'id',
    }, {
        type: 'input',
        message: `Enter employee's email address.`,
        name: 'email',
    }
]

const addlInfo = [
    {
        type: 'number',
        message: `Enter the manager's office number.`,
        name: 'office',
    },
    {
        type: 'input',
        message: `Enter this engineer's GitHub user name.`,
        name: 'github',
        description: 'engineer'
    },
    {
        type: 'input',
        message: `Enter the name of this intern's school.`,
        name: 'school',
        description: 'intern'
    }
];

const addAnother = {
    type: 'confirm',
    message: 'Would you like to add another Employee?',
    name: 'add'
}

console.log(addlInfo.length);

function addManager() {
    // console.log(employees);
    // if (employees === []) {
    inquirer
        .prompt(employeeQuestions, addlInfo.name.office)
        .then((answers) => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(manager);
            return manager;
        })
    // }
};

addManager();