class Employee {
    constructor(answers) {
        this.name = answers.name;
        console.log(this.name)
        this.id = answers.id;
        console.log(this.id)
        this.email = answers.email;
        console.log(this.email)
    };
    
        getName() {
            console.log(`This employee's name is ${this.name}.`)
            return this.name;
        };
    
        getId() {
            console.log(`${this.name}'s employee id is ${this.id}.`)
            return this.id;
        };

        getEmail() {
            console.log(`${this.name}'s email address is ${this.email}.`)
            return this.email;
        };

        getRole() {
            const role = 'Employee'
            console.log(`${this.name} is an ${role}.`)
            return role;
        };
}

// console.log(new Employee)

module.exports = Employee;

