const Employee = require('./employee');
const generateHTML = require('../utils/generateHTML')


class Intern extends Employee {
    constructor(answers) {
        super(answers);

        this.school = answers.school;
        console.log(this.school);
    };

        getSchool() {
            return this.school;
        }

        getRole() {
            return 'Intern';
        };
}

module.exports = Intern;