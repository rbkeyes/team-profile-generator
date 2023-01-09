const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
        console.log(this.school);
    };

        getRole() {
            const role = 'Intern'
            console.log(`${this.name} is the ${role}`);
            return role;
        };
}

module.exports = Intern;