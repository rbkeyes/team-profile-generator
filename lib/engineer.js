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
            return 'Engineer';
        };
}

module.exports = Engineer;