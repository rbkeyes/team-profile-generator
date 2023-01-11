const allPrompts = {
        promptRole: {
            type: 'list',
            message: 'Select role from list below:',
            choices: ['engineer', 'intern',],
            name: 'role'
        },
        promptName: {
            type: 'input',
            message: `Enter name.`,
            name: 'name',
        },
        promptId: {
            type: 'number',
            message: `Enter employee id.`,
            name: 'id',
        },
        promptEmail: {
            type: 'input',
            message: `Enter email address.`,
            name: 'email',
        },
        promptOfficeNum: {
            type: 'number',
            message: `Enter manager's office number.`,
            name: 'officeNum',
        },
        promptGitHub: {
            type: 'input',
            message: `Enter ${name}'s GitHub user name.`,
            name: 'github',
            description: 'engineer'
        },
        promptSchool: {
            type: 'input',
            message: `Enter the name of ${name}'s school.`,
            name: 'school',
            description: 'intern'
        },
        promptAddMore: {
            type: 'confirm',
            message: 'Would you like to add another employee?',
            name: 'add'
        }
    }

    module.export = prompts;