// class contructor
const Employee = require('../lib/employee');

// const to be used for test
const employeeObj = { name: 'Bob', id: "1", email: "email@email.com" };
const employeeTest = new Employee("Bob", "1", "email@email.com");

// tests for Employee 
describe('Employee class', () => {
    it('Should return an employee object containing name, id, and email', () => {
        expect(employeeTest).toEqual(employeeObj);
    });

    describe('getName method', () => {
        it('Should return this.name', () => {
            const employeeName = employeeObj.name;
            console.log(employeeName);
            const nameTest = employeeTest.getName();
            console.log(nameTest);
            expect(nameTest).toEqual(employeeName);
        })
    });

    describe('getID method', () => {
        it('Should return this.id', () => {
            const employeeId = employeeObj.id;
            console.log(employeeId);
            const idTest = employeeTest.getId();
            console.log(idTest);
            expect(idTest).toEqual(employeeId);
        })
    });

    describe('getEmail method', () => {
        it('Should return this.email', () => {
            const employeeEmail = employeeObj.email;
            console.log(employeeEmail);
            const emailTest = employeeTest.getEmail();
            console.log(emailTest);
            expect(emailTest).toEqual(employeeEmail);
        })
    });

    describe('getRole method', () => {
        it('Should return "Employee"', () => {
            const employeeRole = "Employee";
            console.log(employeeRole);
            const roleTest = employeeTest.getRole();
            console.log(roleTest);
            expect(roleTest).toEqual(employeeRole);
        })
    });
});