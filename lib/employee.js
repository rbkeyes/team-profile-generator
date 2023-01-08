const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

const employeeQuestions = [
    {
        type: 'input',
        message: `Enter employee's name.`,
        name: 'name',
    }, {
        type: 'input',
        message: `Enter employee id.`,
        name: 'name',
    }, {
        type: 'input',
        message: `Enter employee's email address.`,
        name: 'email',
    } 
]

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

        getName() 

        getId()

        getEmail()

        getRole() {
            return 'Employee';
        }
}

module.exports = Employee;
