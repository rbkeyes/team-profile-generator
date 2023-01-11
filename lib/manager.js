const Employee = require('./employee');

class Manager extends Employee {
    // see if I can sub out "answers", then designate thisOfficeNumber = answers.officeNumber?
    constructor(name, id, email, officeNum) {
        super(name, id, email);

        this.officeNumber = officeNum;
        console.log(this.officeNumber);
    };

        getRole() {
            const role = 'Manager'
            console.log(`${this.name} is the ${role}`);
            return role;
        };
}

module.exports = Manager;