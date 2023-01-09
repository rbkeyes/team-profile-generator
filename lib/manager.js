class Manager {
    constructor(officeNumber) {
        // super(officeNumber);
        this.officeNumber = officeNumber;
        console.log(this.officeNumber);
    };

        getRole() {
            return 'Manager';
        };
}
const manager = new Manager(12);
console.log(manager);

module.exports = Manager;