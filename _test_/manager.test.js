// class contructor
const Manager = require('../lib/Manager');

// const to be used for test
const managerObj = {name: 'Jamie', id: 1, email: "jamie@email.com", officeNumber: 12};
const testObj = {name: 'Jamie', id: 1, email: "jamie@email.com", officeNumber: 12};
const managerTest = new Manager(testObj);


// tests for Manager 
describe('Manager class', () => {
    it('Should return an employee object containing office number in addition to basic employee info', () => {
        expect(managerTest).toEqual(managerObj);
    });

    describe('getRole method', () => {
        it('Should return "Manager"', () => {
            const managerRole = "Manager";
            const roleTest = managerTest.getRole();
            expect(roleTest).toEqual(managerRole);
        })
    });
});