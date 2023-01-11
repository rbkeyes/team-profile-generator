const Employee = require('./employee');

class Manager extends Employee {
    // see if I can sub out "answers", then designate thisOfficeNumber = answers.officeNumber?
    constructor(answers) {
        super(answers);

        this.officeNumber = answers.officeNum;
        console.log(this.officeNumber);
    };

        getRole() {
            const role = 'Manager'
            console.log(`${this.name} is the ${role}`);
            return role;
        };
}

module.exports = Manager;