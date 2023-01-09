class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        console.log(this.officeNumber);
    };

        getRole() {
            return 'Manager';
        };
}

module.exports = Manager;