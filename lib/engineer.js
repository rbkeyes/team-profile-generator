const Employee = require('./employee');

class Engineer extends Employee {
    constructor(answers) {
        super(answers);

        this.gitHub = answers.gitHub;
        console.log(this.gitHub);
    };

        getGitHub() {
            return this.gitHub;
        }

        getRole() {
            const role = 'Engineer'
            console.log(`${this.name} is an ${role}`);
            return role;
        };
}

module.exports = Engineer;