// inquirer
const inquirer = require('inquirer');

// fs
const fs = require('fs');

// prompts file
const prompts = require('./prompts')

// constructors
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// will hold array of employees
const employees = '';

// employee objects to be written to file
const managerPrompts = [prompts.name, prompts.id, prompts.email, prompts.officeNum];
console.log(managerPrompts);
const engineerObj = '';
const internObj = '';

function runProgram() {
    if (!employees) {
        console.log('No employees yet. Enter name below to add first employee.');
        addEmployee(managerPrompts)
    // } else {
    //     inquirer.prompt({
    //         type: 'list',
    //         message: 'Select role from list below:',
    //         choices: ['engineer', 'intern',],
    //         name: 'role'
    //     },).then((answer) => {console.log(answer)})
    //     .then(addEmployee(answer.role));
    }
};

function addEmployee(q) {
    inquirer.prompt([{
        type: 'input',
        message: `Enter name.`,
        name: 'name',
    }, {
        type: 'number',
        message: `Enter employee id.`,
        name: 'id',
    }, {
        type: 'input',
        message: `Enter email address.`,
        name: 'email',
    }])
        .then((answers) => {
            console.log(answers)
            if (role === 'manager') {
                console.log(`Adding a manager.`)
                // addManager(answers);
            } ;
            // else if (role === 'engineer') {
            //     addEngineer(answer);
            // } else {
            //     addIntern(answer);
            // }
        })
        return answers;
};

function addManager() {
    addEmployee('manager')
    // .then(() => {
    inquirer.prompt({
            type: 'number',
            message: `Enter manager's office number.`,
            name: 'officeNum',
    })
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)
        console.log(answer.officeNum)})
    }
    // )}

runProgram();
