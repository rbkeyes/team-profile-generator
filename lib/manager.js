const Employee = require('./employee');

class Manager extends Employee {
    constructor(answers) {
        super(answers);

        this.officeNumber = answers.officeNumber;
    };

    getOfficeNum() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;