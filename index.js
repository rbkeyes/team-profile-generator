// modules inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

// class constructors
// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let employeeRole = '';

// empty array to hold employees as they are added
const team = [];

// all prompts (to be run by inquirer)
const questionObj = {
    mainMenu: {
        name: 'mainMenu',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Add a team Manager', 'Add an Engineer to the team.', 'Add an Intern to the team.', 'Generate team profiles page!.']
    },
    name: {
        name: 'name',
        type: 'input',
        message: `Enter the ${employeeRole}'s name.`,
    },
    id: {
        name: 'id',
        type: 'number',
        message: `Enter the ${employeeRole} employee id.`,
    },
    email: {
        name: 'email',
        type: 'input',
        message: `Enter the ${employeeRole}'s email address.`,
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
};

// specific prompts for role, manager, engineer, and intern data, as well as main menu;
// remove manager name & push main menu to end of array after adding manager
const employeePrompts = [questionObj.name, questionObj.id, questionObj.email];

function runProgram() {
// employee role tbd 
    role = 'employeeRole';
    console.log(role)
    function addNewTeamMember(role) {
        // check for existing team file
        // if file exists, prompt main menu, then add employee based on role selected
        // if no file, start with manager, plugging in role when prompting name, etc.
        switch (role) {
            case 'manager':
                addManager();
                break;
            case 'engineer':
                addEngineer();
                break;
            case 'intern':
                addIntern();
                break;
        }
    };

    function addManager() {
        employeePrompts.push(questionObj.officeNum);
        inquirer.prompt(prompt)
            .then((answers) => {
                console.log(answers)
                // replace below with function to retrieve team from team.js file, add new employee to existing team, and write file with new team array.
                team.push = new Manager(answers);
                return team;
            })
    };

    function addEngineer() {
        employeePrompts.push(questionObj.gitHub);
        inquirer.prompt(prompt)
            .then((answers) => {
                console.log(answers)
                team.push = new Engineer(answers);
                return team;
            })
    };

    function addIntern() {
        employeePrompts.push(questionObj.school);
        inquirer.prompt(prompt)
            .then((answers) => {
                console.log(answers)
                team.push = new Intern(answers);
                return team;
            })
    };

    // add function to 

    // add function to read existing team.js file (if it exists), parse data, push new employee to array, and write file (overwriting old array with new array)
        // when writing file initially must be sure to save as array of objects 

addNewTeamMember();
};

employeeRole = 'manager';
runProgram();
