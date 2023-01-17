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

};

module.exports = Employee;