// modules inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

// class constructors
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// all prompts (to be run by inquirer)
const questionObj = {
    role: {
        name: 'role',
        type: 'list',
        message: 'Select role from list below:',
        choices: ['engineer', 'intern', 'back to main menu'],
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

// empty array to hold employees as they are added
const team = [];

// specific prompts for role, manager, engineer, and intern data, as well as main menu;
const employeePrompts = [questionObj.name, questionObj.id, questionObj.email];
const rolePrompt = questionObj.role;
const managerPrompt = questionObj.officeNum;
const engineerPrompt = questionObj.gitHub;
const internPrompt = questionObj.school;
const menuPrompt = questionObj.menu;


function runProgram() {

    function addNewEmployee(role) {
        if (!role) {
            role = 'manager'
            employeeRole = role;
        } {
            employeeRole = role;
        };
        switch (role) {
            case 'manager':
                employeePrompts.push(managerPrompt);
                team.push = new Manager(answers);
                break;
            case 'engineer':
                employeePrompts.push(engineerPrompt);
                team.push = new Engineer(answers);
                break;
            case 'intern':
                employeePrompts.push(internPrompt);
                team.push = new Intern(answers);
                break;
        }
        return team;
    };

function addManager(prompt) {
    inquirer.prompt(prompt)
        .then((answers) => {
            console.log(answers)
            return answers;
        })
};


function addToTeam(newEmployee) {
    team.push(newEmployee);
    console.log(team);
    return team;
};

};

// employeeRole = 'engineer'
runProgram();
