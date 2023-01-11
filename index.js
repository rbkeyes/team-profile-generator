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
const prompts = {
    role: {
        type: 'list',
        message: 'Select role from list below:',
        choices: ['engineer', 'intern',],
        name: 'role'
    },
    name: {
        type: 'input',
        message: `Enter employee's name.`,
        name: 'name',
    },
    id: {
        type: 'number',
        message: `Enter employee id.`,
        name: 'id',
    },
    email: {
        type: 'input',
        message: `Enter employee's email address.`,
        name: 'email',
    },
    officeNum: {
        type: 'number',
        message: `Enter the manager's office number.`,
        name: 'officeNum',
    },
    gitHub: {
        type: 'input',
        message: `Enter the engineer's GitHub user name.`,
        name: 'github',
        description: 'engineer'
    },
    school: {
        type: 'input',
        message: `Enter the name of the intern's school.`,
        name: 'school',
        description: 'intern'
    },
    addMore: {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'add'
    }
}
// employee objects to be written to file
const managerPrompts = [prompts.name, prompts.id, prompts.email, prompts.officeNum];
// console.log(managerPrompts);
const engineerObj = '';
const internObj = '';

// function runProgram() {
//     if (!employees) {
//         console.log('No employees yet. Enter name below to add first employee.');
//         addEmployee(managerPrompts)
//     // } else {
//     //     inquirer.prompt({
//     //         type: 'list',
//     //         message: 'Select role from list below:',
//     //         choices: ['engineer', 'intern',],
//     //         name: 'role'
//     //     },).then((answer) => {console.log(answer)})
//     //     .then(addEmployee(answer.role));
//     }
// };

function addEmployee(role) {
    inquirer.prompt(managerPrompts)
        .then((answers) => {
            console.log(answers)
            if (role === 'manager') {
                console.log(`Adding a manager.`)
                const manager = new Manager(answers)
                employees.push(manager)
                console.log(employees);
            } ;
            // else if (role === 'engineer') {
            //     addEngineer(answer);
            // } else {
            //     addIntern(answer);
            // }
        })
        // return employees;
};
addEmployee('manager')

// runProgram();
