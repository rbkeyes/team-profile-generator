const Employee = require('./employee');

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
            const role = 'Intern'
            console.log(`${this.name} is an ${role}`);
            return role;
        };
}

module.exports = Intern;