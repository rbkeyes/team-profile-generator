const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
        console.log(this.officeNumber);
    };

        getRole() {
            console.log('Manager');
            return 'Manager';
        };
}
// console.log(new Manager(15));


module.exports = Manager;