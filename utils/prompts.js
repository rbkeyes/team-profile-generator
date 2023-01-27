// all prompts (to be run by inquirer)
const promptsObj = {
    managerName: {
        name: 'name',
        type: 'input',
        message: `Enter the manager's name to start building your team.`,
    },
    engineerName: {
        name: 'name',
        type: 'input',
        message: `Enter the engineer's name.`,
    },
    internName: {
        name: 'name',
        type: 'input',
        message: `Enter the intern's name.`,
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
    officeNumber: {
        name: 'officeNumber',
        type: 'number',
        message: `Enter their office number.`,
    },
    gitHub: {
        name: 'gitHub',
        type: 'input',
        message: `Enter their GitHub user name.`,
    },
    school: {
        name: 'school',
        type: 'input',
        message: `Enter the name of their school.`,
    },
    mainMenu: {
        name: 'mainMenu',
        type: 'list',
        message: 'Select role from below to add a new team member.',
        choices: ['engineer', 'intern', 'Finish building my team.']
    }
};

module.exports = promptsObj;