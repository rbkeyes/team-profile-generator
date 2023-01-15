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
    }
};

const employeePrompts = [promptsObj.name, promptsObj.id, promptsObj.email];
const managerPrompts = employeePrompts.push(promptsObj.officeNum);
const engineerPrompts = employeePrompts.push(promptsObj.gitHub);
const internPrompts = employeePrompts.push(promptsObj.internPrompts);

module.exports = { managerPrompts, engineerPrompts, internPrompts };