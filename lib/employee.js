const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

const employeeQuestions = [
    {
        type: 'input',
        message: `Enter the ${this.role}'s name`,
        name: 'name',
    },
    {

    }
]
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        getName() 

        getId()

        getEmail()

        getRole()
    }
}