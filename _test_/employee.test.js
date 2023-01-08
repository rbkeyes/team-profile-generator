// const { exportAllDeclaration } = require('@babel/types');
// const { it } = require('node:test');
const Employee = require('../lib/employee');

describe('Employee class', () => {
    const employeeObj = {name: 'Bob', id: "1", email: "email@email.com"};
    it('Should return an employee object', () => {
        const employeeTest = new Employee("Bob", "1", "email@email.com");
        expect(employeeTest).toEqual(employeeObj);
    });
    
    describe('getName', () => {
        it('Should return this.name', () => {
            const employeeName = employeeObj.name;
            const nameTest = Employee.getName('Bob')

            expect(nameTest).toEqual(employeeName);
        })
    })
})