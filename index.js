// modules inquirer & fs
const inquirer = require('inquirer');
const fs = require('fs');

// class constructors
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// inquirer prompts
const promptsObj = require('./utils/prompts')
const generateHTML = require('./utils/generateHTML')

// empty array to hold employees as they are added
let team = [];

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
                default:
                    console.log(team);
                // generate html file
            }
        };

    function addManager() {
        const managerPrompts = [promptsObj.addManager, promptsObj.managerName, promptsObj.id, promptsObj.email, promptsObj.officeNum, promptsObj.mainMenu];
        inquirer.prompt(managerPrompts)
            .then((answers) => {
                console.log(answers)
                const manager = new Manager(answers);
                team.push(manager);
                console.log(`${answers.name} added as team Manager!`);
                addNewTeamMember(answers.mainMenu);
                generateCard(manager);
                return manager;
            })
    };

    function addEngineer() {
        const engineerPrompts = [promptsObj.engineerName, promptsObj.id, promptsObj.email, promptsObj.gitHub, promptsObj.mainMenu];
        inquirer.prompt(engineerPrompts)
            .then((answers) => {
                const engineer = new Engineer(answers);
                console.log(engineer);
                team.push(engineer)
                console.log(`${answers.name} added as an Engineer!`);
                addNewTeamMember(answers.mainMenu);
                return engineer;
            })
    };

    function addIntern() {
        const internPrompts = [promptsObj.internName, promptsObj.id, promptsObj.email, promptsObj.school, promptsObj.mainMenu];
        inquirer.prompt(internPrompts)
            .then((answers) => {
                const intern = new Intern(answers);
                console.log(intern);
                team.push(intern)
                console.log(`${answers.name} added as an Intern!`);
                addNewTeamMember(answers.mainMenu);
                return intern;
            })
    };

    // function generatHTML(team) {
    //     fs.readFile(file, 'utf8', (err, data) => {
    //         if (err) {
    //             console.error(err);
    //         } else {
    //             // Convert string into JSON object
    //             const parsedTeam = JSON.parse(data);

    //             // push employee into parsed team array
    //             parsedTeam.push(newEmployee);

    //             // write json file containing array of team member objects
    //             fs.writeFile('team.json', JSON.stringify(data), function (err) {
    //                 err ? console.log(err) : console.log(`team.json file created!`)
    //             })
    //         }
    //     })
    // };

    // // add function to 

    // // add function to read existing team.js file (if it exists), parse data, push new employee to array, and write file (overwriting old array with new array)
    // // when writing file initially must be sure to save as array of objects 
// };

addNewTeamMember('manager');