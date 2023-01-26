// class contructor
const Employee = require('../lib/employee');

// const to be used for test
const testObj = { name: "Bob", id: 0, email: "bob@email.com" }

// tests for Employee 
describe('Employee class', () => {
    const testEmployee = new Employee(testObj);

    it('Should return an instance of Employee class', () => {
        expect(testEmployee).toBeInstanceOf(Employee);
    });
    it('Should return typeof object', () => {
        expect(typeof testEmployee).toBe('object');
    });
    it('Should contain the employee data entered by the user', () => {
        expect(testEmployee).toMatchObject(testObj);
    });

    describe('getName method', () => {
        const testName = new Employee(testObj).getName();
        
        it('Should return typeof string', () => {
            expect(typeof testName).toBe('string')
        });
        it('Should return input name value', () => {
            expect(testName).toBe("Bob");
        });
    });

    describe('getID method', () => {
        const testId = new Employee(testObj).getId();

        it('Should return typeof number', () => {
            expect(typeof testId).toBe('number');
        });
        it('Should return input id value.', () => {
            expect(testId).toBe(0);
        });
    });

    describe('getEmail method', () => {
        const testEmail = new Employee(testObj).getEmail();

        it('Should return typeof string', () => {
            expect(typeof testEmail).toBe('string');
        });
        it('Should return input email value', () => {
            expect(testEmail).toBe("bob@email.com");
        });
    });

    describe('getRole method', () => {
        const testRole = new Employee(testObj).getRole();

        it('Should return typeof string', () => {
            expect(typeof testRole).toBe('string');
        });
        it('Should return "Employee"', () => {
            expect(testRole).toEqual('Employee');
        });
    });
});