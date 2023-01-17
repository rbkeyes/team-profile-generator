const Employee = require('./employee');

class Manager extends Employee {
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
};

module.exports = Manager;