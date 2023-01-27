// class contructor
const Intern = require('../lib/Intern');

// const to be used for test
const testObj = {name: 'Toni', id: 3, email: "toni@email.com", school: 'Pretty Good University'};

// tests for intern 
describe('Intern class', () => {
    const testIntern = new Intern(testObj);

    it('Should return an instance of Intern class', () => {
        expect(testIntern).toBeInstanceOf(Intern);
    });
    it('Should return typeof object', () => {
        expect(typeof testIntern).toBe('object');
    });
    it('Should contain the Intern data entered by the user', () => {
        expect(testIntern).toMatchObject(testObj);
    });

    describe('getSchool() method', () => {
        const testSchool = new Intern(testObj).getSchool();

        it('Should return typeof number', () => {
            expect(typeof testSchool).toBe('string');
        });
        it('Should return input School value.', () => {
            expect(testSchool).toBe('Pretty Good University');
        });
    });

    describe('getRole method', () => {
        const testRole = new Intern(testObj).getRole();

        it('Should return typeof string', () => {
            expect(typeof testRole).toBe('string');
        });
        it('Should return "Intern"', () => {
            expect(testRole).toEqual('Intern');
        });
    });
});