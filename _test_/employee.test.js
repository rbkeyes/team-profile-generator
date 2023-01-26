// class contructor
const Employee = require('../lib/employee');

// const to be used for test
const employeeObj = { name: 'Bob', id: 0, email: "bob@email.com" };
console.log(employeeObj);
const testObj = {name: "Bob", id: 0, email: "bob@email.com"}
const employeeTest = new Employee(testObj);
console.log(employeeTest);

// tests for Employee 
describe('Employee class', () => {
    it('Should return an employee object containing name, id, and email', () => {
        expect(employeeTest).toEqual(employeeObj);
    });

    describe('getName method', () => {
        it('Should return this.name', () => {
            const employeeName = employeeObj.name;
            const nameTest = employeeTest.getName();
            expect(nameTest).toEqual(employeeName);
        })
    });

    describe('getID method', () => {
        it('Should return this.id', () => {
            const employeeId = employeeObj.id;
            const idTest = employeeTest.getId();
            expect(idTest).toEqual(employeeId);
        })
    });

    describe('getEmail method', () => {
        it('Should return this.email', () => {
            const employeeEmail = employeeObj.email;
            const emailTest = employeeTest.getEmail();
            expect(emailTest).toEqual(employeeEmail);
        })
    });

    describe('getRole method', () => {
        it('Should return "Employee"', () => {
            const employeeRole = "Employee";
            const roleTest = employeeTest.getRole();
            expect(roleTest).toEqual(employeeRole);
        })
    });
});