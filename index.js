// modules inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

// class constructors
// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// employee role tbd by answer to mainMenu prompt
let employeeRole = '';
let newTeamMember = '';

// empty array to hold employees as they are added
const team = [];

// all prompts (to be run by inquirer)
const questionObj = {
    mainMenu: {
        name: 'mainMenu',
        type: 'list',
        message: 'Select role from below to add a new team member.',
        choices: ['manager', 'engineer', 'intern', 'Finished adding team members, generate profiles.']
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

// run prompts to gather new team member data 
function addNewTeamMember() {
    // main menu prompt to get employee role
    inquirer.prompt(questionObj.mainMenu)
        .then((answers) => {
            // replace below with function to retrieve team from team.js file, add new employee to existing team, and write file with new team array.
            employeeRole = answers.mainMenu;
            console.log(employeeRole);
            // check for existing team file
            // if file exists, prompt main menu, then add employee based on role selected
            // if no file, start with manager, plugging in role when prompting name, etc.
            switch (employeeRole) {
                case 'manager':
                    addManager();
                    break;
                case 'engineer':
                    addEngineer();
                    break;
                case 'intern':
                    addIntern();
                    break;
                default:
                // should I add a prompt for default asking if they would like to continue adding more team members? 
                // could use same prompt for end of questions as well.
            }
        });

    function addManager() {
        employeePrompts.push(questionObj.officeNum);
        inquirer.prompt(employeePrompts)
            .then((answers) => {
                // replace below with function to retrieve team from team.js file, add new employee to existing team, and write file with new team array.
                newTeamMember = new Manager(answers);
                writeToFile(newTeamMember);
                console.log(newTeamMember);
                console.log(`New ${employeeRole} added to the team!`)
                return newTeamMember;
            })
    };

    function addEngineer() {
        employeePrompts.push(questionObj.gitHub);
        inquirer.prompt(employeePrompts)
            .then((answers) => {
                team.push = new Engineer(answers);
                console.log(`New ${employeeRole} added to the team!`)
                console.log(answers)
                return team;
            })
    };

    function addIntern() {
        employeePrompts.push(questionObj.school);
        inquirer.prompt(employeePrompts)
            .then((answers) => {
                console.log(answers)
                team.push = new Intern(answers);
                console.log(`New ${employeeRole} added to the team!`)
                return team;
            })
    };

    // function writeToFile(data) {
    //     fs.writeFile('teamArray.js', data, function (err) {
    //         err ? console.log(err) : console.log("teamArray.js file created!")
    //     });
    // }

    // add function to 

    // add function to read existing team.js file (if it exists), parse data, push new employee to array, and write file (overwriting old array with new array)
    // when writing file initially must be sure to save as array of objects 

};

addNewTeamMember();