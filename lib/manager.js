const Employee = require('./employee');

class Manager extends Employee {
    // see if I can sub out "answers", then designate thisOfficeNumber = answers.officeNumber?
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        console.log(this.officeNumber);
    };

        getRole() {
            const role = 'Manager'
            console.log(`${this.name} is the ${role}`);
            return role;
        };
}

const manager = new Manager.getRole

module.exports = Manager;