// class contructor
const Manager = require('../lib/Manager');

// const to be used for test
const testObj = { name: 'Jamie', id: 1, email: "jamie@email.com", officeNumber: 12 };



// tests for Manager 
describe('Manager class', () => {
    const testManager = new Manager(testObj);

    it('Should return an instance of Manager class', () => {
        expect(testManager).toBeInstanceOf(Manager);
    });
    it('Should return typeof object', () => {
        expect(typeof testManager).toBe('object');
    });
    it('Should contain the manager data entered by the user', () => {
        expect(testManager).toMatchObject(testObj);
    });

    describe('getOfficeNum() method', () => {
        const testOfficeNum = new Manager(testObj).getOfficeNum();

        it('Should return typeof number', () => {
            expect(typeof testOfficeNum).toBe('number');
        });
        it('Should return input office number value.', () => {
            expect(testOfficeNum).toBe(12);
        });
    });

    describe('getRole method', () => {
        const testRole = new Manager(testObj).getRole();

        it('Should return typeof string', () => {
            expect(typeof testRole).toBe('string');
        });
        it('Should return "Manager"', () => {
            expect(testRole).toEqual('Manager');
        });
    });
});