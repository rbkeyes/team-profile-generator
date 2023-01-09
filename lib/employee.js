const Manager = require('./Manager')
// const Engineer = require('./Engineer')
// const Intern = require('./Intern')

class Employee {
    constructor(name, id, email) {
        this.name = name;
        console.log(this.name)
        this.id = id;
        console.log(this.id)
        this.email = email;
        console.log(this.email)
    };
    
        getName() {
            return this.name;
        };
    
        getId() {
            return this.id;
        };

        getEmail() {
            return this.email;
        };

        getRole() {
            return 'Employee';
        };
}
console.log(new Employee)

module.exports = Employee;

