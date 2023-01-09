const Employee = require('./employee');

class Manager extends Employee {
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
// console.log(new Manager(15));


module.exports = Manager;