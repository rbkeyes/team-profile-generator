const promptNewEmployee = {
    promptRole:
    {
        type: 'list',
        message: 'Select employee role from list below:',
        choices: ['engineer', 'intern',],
        name: 'role'
    },
    promptName:
    {
        type: 'input',
        message: `Enter ${this.role}'s name.`,
        name: 'name',
    },
    promptId:
    {
        type: 'number',
        message: `Enter ${this.role}'s employee id.`,
        name: 'id',
    },
    promptEmail:
    {
        type: 'input',
        message: `Enter ${this.role}'s email address.`,
        name: 'email',
    },
    promptOfficeNum:
    {
        type: 'number',
        message: `Enter ${this.role}'s office number.`,
        name: 'office',
    },
    promptGitHub:
    {
        type: 'input',
        message: `Enter this ${this.role}'s GitHub user name.`,
        name: 'github',
        description: 'engineer'
    },
    promptSchool:
    {
        type: 'input',
        message: `Enter the ${this.role} of this intern's school.`,
        name: 'school',
        description: 'intern'
    },
    promptAddMore:
    {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'add'
    }
};





const managerPrompts = [
    promptName, promptId, promptEmail, promptOfficeNum
]
console.log(managerPrompts)

class Prompts {
    constructor(role) {
        this.role = role;
        console.log(this.role);
    }
}

module.exports = prompts;
