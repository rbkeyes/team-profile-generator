// class contructor
// const Employee = require('../lib/employee');
const Manager = require('../lib/Manager');

// tests for Manager 
describe('Manager class', () => {
    it('Should return an object containing this.officeNumber', () => {
        const officeNumber = {officeNumber: 12};
        const officeNumberTest = new Manager(12)

        expect(officeNumberTest).toEqual(officeNumber);
    });

    describe('getRole method', () => {
        it('Should return "Manager"', () => {
            const managerRole = "Manager";
            console.log(managerRole);
            const roleTest = Manager.getRole();
            console.log(roleTest);
            expect(roleTest).toEqual(managerRole);
        })
    });
});