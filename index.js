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



console.log(addlInfo.length);

function addManager() {
    // console.log(employees);
    // if (employees === []) {
    inquirer
        .prompt(employeeQuestions)
        .then((answers) => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(manager);
            return manager;
        })
    // }
};

addManager();