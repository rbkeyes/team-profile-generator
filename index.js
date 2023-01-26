// modules inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

// class constructors
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// inquirer prompts
const promptsObj = require('./utils/prompts')
const { createManagerCard, createEngineerCard, createInternCard, generateHTML } = require('./utils/generateHTML')

// empty array to hold employees as they are added
const teamCards = [];

// run prompts to gather new team member data 
function addNewTeamMember(role) {
    let employeeRole = role;
    console.log(employeeRole);
    // add new team member by role and write to file
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
        case 'other':
            inquirer.prompt(promptsObj.mainMenu).then 
        default:
        // generate html file
        writeHTML(teamCards)

        console.log(...teamCards)
    }
};

// create new instance of Manager and create manager card HTML string for team HTML file
function addManager() {
    const managerPrompts = [promptsObj.addManager, promptsObj.managerName, promptsObj.id, promptsObj.email, promptsObj.officeNumber, promptsObj.mainMenu];
    inquirer.prompt(managerPrompts)
        .then((answers) => {
            const manager = new Manager(answers);
            const managerCard = createManagerCard(manager);
            fileName = `team${manager.getName()}.html`
            teamCards.push(managerCard);
            addNewTeamMember(answers.mainMenu);
            return manager;
        })
};

// create new instance of Engineer and create engineer card HTML string for team HTML file
function addEngineer() {
    const engineerPrompts = [promptsObj.engineerName, promptsObj.id, promptsObj.email, promptsObj.gitHub, promptsObj.mainMenu];
    inquirer.prompt(engineerPrompts)
        .then((answers) => {
            const engineer = new Engineer(answers);
            const engineerCard = createEngineerCard(engineer);
            teamCards.push(engineerCard);
            addNewTeamMember(answers.mainMenu);
            return engineer;
        })
};

// create new instance of Intern and create intern card HTML string for team HTML file
function addIntern() {
    const internPrompts = [promptsObj.internName, promptsObj.id, promptsObj.email, promptsObj.school, promptsObj.mainMenu];
    inquirer.prompt(internPrompts)
        .then((answers) => {
            const intern = new Intern(answers);
            const internCard = createInternCard(intern);
            teamCards.push(internCard);
            addNewTeamMember(answers.mainMenu);
            return intern;
        })
};

function writeHTML(cards) {
            const fileName = './dist/teamProfiles.html'
            const htmlContent = generateHTML(cards);
            // write html file containing array of team member objects
            fs.writeFile(fileName, htmlContent, function (err) {
                err ? console.log(err) : console.log(`${fileName} file created!`)
            })
        };

addNewTeamMember('manager');