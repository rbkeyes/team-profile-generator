// modules inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

// class constructors
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// // file to be written
let employeeRole = ''
const team = [];

// all prompts
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
// specific prompts for role, manager, engineer, and intern data, as well as main menu;
const rolePrompt = questionObj.role;
const managerPrompt = questionObj.officeNum;
const engineerPrompt = questionObj.gitHub;
const internPrompt = questionObj.school;
const menuPrompt = questionObj.menu;

function getRole(role) {
    if (!role) {
        role = 'manager'
    }{
        
    };
    console.log(role);
    return role;
};

function getPrompts(role) {
    console.log(`Getting prompts for ${role} role.`);
    switch (role) {
        case 'manager':
            prompt = managerPrompt;
            break;
        case 'engineer':
            prompt = engineerPrompt;
            break;
        case 'intern':
            prompt = internPrompt;
            break;
    };
    return role, prompt;
}

function runPrompts(role, prompt) {
    const employeePrompts = [questionObj.name, questionObj.id, questionObj.email, prompt]
    let newEmployee = '';
    inquirer.prompt(employeePrompts)
        .then((answers) => {
            console.log(answers)
            switch (role) {
                case 'manager':
                    newEmployee = new Manager(answers);
                    // const manager = new Manager(answers);
                    // team.push(manager);
                    // console.log(manager.getRole());
                    break;
                case 'engineer':
                    newEmployee = new Engineer(answers);
                    team.push(engineer);
                    console.log(engineer.getRole());
                    break;
                case 'intern':
                    newEmployee = new Intern(answers);
                    team.push(intern);
                    console.log(intern.getRole());
                    break;
            }
        })
        console.log(newEmployee);
        return newEmployee;
};

// function addToTeam(newEmployee)


// run program
const runProgram = () => {
    getRole(employeeRole)
    // .then((role) => getPrompts(role))
    // .then((role, prompt) => runPrompts(role, prompt))
    // .then((newEmployee) => addToTeam(newEmployee))
    // .then(())
};

// employeeRole = 'intern'
runProgram();
