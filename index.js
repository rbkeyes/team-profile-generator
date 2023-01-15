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
let newEmployee = '';

// empty array to hold employees as they are added
const team = [];
const fileName = 'team.json';

// all prompts (to be run by inquirer)
const promptsObj = {
    mainMenu: {
        name: 'mainMenu',
        type: 'list',
        message: 'Select role from below to add a new team member.',
        choices: ['manager']
    },
    name: {
        name: 'name',
        type: 'input',
        message: `Enter the new team member's name.`,
    },
    id: {
        name: 'id',
        type: 'number',
        message: `Enter their employee id.`,
    },
    email: {
        name: 'email',
        type: 'input',
        message: `Enter their email address.`,
    },
    officeNum: {
        name: 'officeNum',
        type: 'number',
        message: `Enter their office number.`,
    },
    gitHub: {
        name: 'github',
        type: 'input',
        message: `Enter their GitHub user name.`,
    },
    school: {
        name: 'school',
        type: 'input',
        message: `Enter the name of their school.`,
    },
    addMore: {
        name: 'addMore',
        type: 'confirm',
        message: 'Would you like to add another team member?',
    }
};

// specific prompts for role, manager, engineer, and intern data, as well as main menu;
// remove manager name & push main menu to end of array after adding manager
const employeePrompts = [promptsObj.name, promptsObj.id, promptsObj.email, promptsObj.addMore];

// run prompts to gather new team member data 
function addNewTeamMember(prompt) {
    fs.writeFile(fileName, JSON.stringify(team), function (err) {
        err ? console.log(err) : 
    // main menu prompt to get employee role
    // defaults to manager when program initiated, then all roles for subsequent adds.
    inquirer.prompt(prompt)
        .then((answers) => {
            employeeRole = answers.mainMenu;
            console.log(employeeRole);
            // add new team member by role and write to file
            switch (employeeRole) {
                case 'manager':
                    if (promptsObj.mainMenu.length === 1) {
                        promptsObj.mainMenu.choices.push('engineer', 'intern', 'No more team members, generate profiles now.')
                    };
                    addManager();
                    // employeePrompts.push(promptsObj.officeNum);
                    break;
                case 'engineer':
                    // push
                    employeePrompts.splice(3, 0, promptsObj.gitHub);
                    addEngineer();
                    break;
                case 'intern':
                    employeePrompts.splice(3, 0, promptsObj.school);
                    addIntern();
                    break;
                default:
                // generate html file
            }
        }
        )
    });

    function addManager() {
        // splice in office number prompt for manager 
        employeePrompts.splice(3, 0, promptsObj.officeNum);
        // run prompts
        inquirer.prompt(employeePrompts)
            .then((answers) => {
                const newEmployee = new Manager(answers);
                // console.log(team)
                console.log(`${answers.name} added as team Manager!`)
                // console.log(answers)
                addToFile(fileName, newEmployee);
                return newEmployee;
            })
    };

    function addEngineer() {
        employeePrompts.push(promptsObj.gitHub);
        inquirer.prompt(employeePrompts)
            .then((answers) => {
                newEmployee = new Engineer(answers);
                console.log(`${answers.name} added as an engineer!`)
                addToFile(fileName, newEmployee);
                return newEmployee;
            })
    };

    function addIntern() {
        employeePrompts.push(promptsObj.school);
        inquirer.prompt(employeePrompts)
            .then((answers) => {
                console.log(answers)
                newEmployee = new Intern(answers);
                console.log(`New ${employeeRole} added to the team!`)
                addToFile(fileName, newEmployee);
                return newEmployee;
            })
    };

    function addToFile(file, data) {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
                // Convert string into JSON object
                const parsedTeam = JSON.parse(data);

                // push employee into parsed team array
                parsedTeam.push(newEmployee);

                // write json file containing array of team member objects
                fs.writeFile('team.json', JSON.stringify(data), function (err) {
                    err ? console.log(err) : console.log(`team.json file created!`)
                })
            }
        })
    };

    // add function to 

    // add function to read existing team.js file (if it exists), parse data, push new employee to array, and write file (overwriting old array with new array)
    // when writing file initially must be sure to save as array of objects 
};

addNewTeamMember(promptsObj.mainMenu);