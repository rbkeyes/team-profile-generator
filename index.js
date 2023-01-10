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

const employeeQuestions = [
    {
        type: 'list',
        message: 'Select employee role from list below:',
        choices: ['manager', 'engineer', 'intern',],
        name: 'role'
    },
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
    } ,
    {
        type: 'number',
        message: `Enter the manager's office number.`,
        name: 'office',
    },
    {
        type: 'input',
        message: `Enter this engineer's GitHub user name.`,
        name: 'github',    
    },
    {
        type: 'input',
        message: `Enter the name of this intern's school.`,
        name: 'school',
    },
    {
        type: 'confirm',
        message: 'Would you like to add another Employee?',
        name: 'add'
    }
]

function addManager() {
    inquirer
        .prompt(employeeQuestions)
        .then((answers) => {
            console.log(answers);
            const employee = new Employee(answers.name, answers.id, answers.email);
            const manager = new Manager(answers.officeNumber);
            console.log(employee);
            console.log(employee.getRole)
            console.log(manager);
            return answers;
        })
    };

addManager();