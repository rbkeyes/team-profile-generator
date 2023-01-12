// modules inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

// class constructors
// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// all prompts (to be run by inquirer)
const questionObj = {
    managerName: {
        name: 'managerName',
        type: 'input',
        message: 'To start, please enter the name of the team manager.',
    },
    mainMenu: {
        name: 'mainMenu',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add a team Manager', 'Add an Engineer to the team.', 'Add an Intern to the team.', 'Finish building my team.']
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
}

// empty array to hold employees as they are added
const team = [];

// specific prompts for role, manager, engineer, and intern data, as well as main menu;
// remove manager name & push main menu to end of array after adding manager
const employeePrompts = [questionObj.managerName, questionObj.name, questionObj.id, questionObj.email];


function runProgram() {

    function addNewTeamMember() {

        switch (role) {
            case 'manager':
                addManager();
                break;
            case 'engineer':
                team.push = new Engineer(answers);
                break;
            case 'intern':
                team.push = new Intern(answers);
                break;
        }
        return team;
    };

    function addManager() {
        employeePrompts.push(questionObj.officeNum);
        inquirer.prompt(prompt)
            .then((answers) => {
                console.log(answers)
                team.push = new Manager(answers);
                return team;
            })
    };

    function addEngineer() {
        employeePrompts.push(questionObj.gitHub);
        inquirer.prompt(prompt)
            .then((answers) => {
                console.log(answers)
                team.push = new Manager(answers);
                return team;
            })
    };

    function addIntern() {
        employeePrompts.push(questionObj.school);
        inquirer.prompt(prompt)
            .then((answers) => {
                console.log(answers)
                team.push = new Manager(answers);
                return team;
            })
    };
addNewTeamMember();
};

runProgram();
