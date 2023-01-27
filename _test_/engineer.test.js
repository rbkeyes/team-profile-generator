// class contructor
const Engineer = require('../lib/Engineer');

// const to be used for test
const testObj = {name: 'Parker', id: 2, email: "parker@email.com", gitHub: 'pretendparker'};

// tests for engineer 
describe('Engineer class', () => {
    const testEngineer = new Engineer(testObj);

    it('Should return an instance of Engineer class', () => {
        expect(testEngineer).toBeInstanceOf(Engineer);
    });
    it('Should return typeof object', () => {
        expect(typeof testEngineer).toBe('object');
    });
    it('Should contain the Engineer data entered by the user', () => {
        expect(testEngineer).toMatchObject(testObj);
    });

    describe('getGitHub() method', () => {
        const testGitHub = new Engineer(testObj).getGitHub();

        it('Should return typeof number', () => {
            expect(typeof testGitHub).toBe('string');
        });
        it('Should return input GitHub username value.', () => {
            expect(testGitHub).toBe('pretendparker');
        });
    });

    describe('getRole method', () => {
        const testRole = new Engineer(testObj).getRole();

        it('Should return typeof string', () => {
            expect(typeof testRole).toBe('string');
        });
        it('Should return "Engineer"', () => {
            expect(testRole).toEqual('Engineer');
        });
    });
});