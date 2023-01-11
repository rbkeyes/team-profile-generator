// modules inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

// class modules
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employees = [];

// all prompts
const allPrompts = {
    role: {
        name: 'role',
        type: 'list',
        message: 'Select role from list below:',
        choices: ['engineer', 'intern',],
    },
    name: {
        name: 'name',
        type: 'input',
        message: `Enter employee's name.`,
    },
    id: {
        name: 'id',
        type: 'number',
        message: `Enter employee id.`,
    },
    email: {
        name: 'email',
        type: 'input',
        message: `Enter employee's email address.`,
    },
    officeNum: {
        name: 'officeNum',
        type: 'number',
        message: `Enter the manager's office number.`,
    },
    gitHub: {
        name: 'github',
        type: 'input',
        message: `Enter the engineer's GitHub user name.`,
    },
    school: {
        name: 'school',
        type: 'input',
        message: `Enter the name of the intern's school.`,
    },
    menu: {
        name: 'menu',
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer to the team.', 'Add an Intern to the team.', 'Finish building my team.',],
    }
}
// specific prompts for manager, engineer, and intern data
const managerPrompt = allPrompts.officeNum;
const engineerPrompt = allPrompts.gitHub;
const internPrompt = allPrompts.school;

function runProgram(role) {
    // if (role = 'manager') {
        console.log(`Adding a(n) ${role}.`);
        switch (role) {
            case 'manager':
                addEmployee(role, managerPrompt);
                break;
            case 'engineer':
                addEmployee(role, engineerPrompt);
                break;
            case 'intern':
                addEmployee(role, internPrompt);
                break;
        }
};

function addEmployee(role, prompt) {
    const employeePrompts = [allPrompts.name, allPrompts.id, allPrompts.email, prompt]
    inquirer.prompt(employeePrompts)
        .then((answers) => {
            console.log(answers)
            switch (role) {
                case 'manager':
                    const manager = new Manager(answers);
                    employees.push(manager);
                    console.log(manager.getRole());
                    console.log(employees);
                    break;
                case 'engineer':
                    const engineer = new Engineer(answers);
                    employees.push(engineer);
                    console.log(engineer.getRole());
                    console.log(employees);
                    break;
                case 'intern':
                    const intern = new Intern(answers);
                    employees.push(intern);
                    console.log(intern.getRole());
                    console.log(employees);
                    break;
            }
        })
    // return employees;
};

runProgram('intern')
// runProgram();
