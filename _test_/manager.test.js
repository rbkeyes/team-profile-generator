// class contructor
const Employee = require('../lib/employee');
const Manager = require('../lib/Manager');

// const to be used for test
const managerObj = {name: 'Jamie', id: 1, email: "jamie@email.com", officeNumber: 12};
console.log(managerObj);
const managerTest = new Manager('Jamie', 1, 'jamie@email.com', 12)
console.log(managerTest);

// tests for Manager 
describe('Manager class', () => {
    it('Should return an employee object containing this.officeNumber in addition to basic employee info', () => {
        expect(managerTest).toEqual(managerObj);
    });

    describe('getRole method', () => {
        it('Should return "Manager"', () => {
            const managerRole = "Manager";
            console.log(managerRole);
            const roleTest = managerTest.getRole();
            console.log(roleTest);
            expect(roleTest).toEqual(managerRole);
        })
    });
});