// class contructor
const Intern = require('../lib/Intern');

// const to be used for test
const internObj = {name: 'Toni', id: 3, email: "toni@email.com", school: 'Pretty Good University'};
const testObj = {name: 'Toni', id: 3, email: "toni@email.com", school: 'Pretty Good University'};
const internTest = new Intern(testObj);

// tests for intern 
describe('Intern class', () => {
    it('Should return an employee object containing name of school in addition to basic employee info', () => {
        expect(internTest).toEqual(internObj);
    });

    describe('getRole method', () => {
        it('Should return "Intern"', () => {
            const internRole = "Intern";
            const roleTest = internTest.getRole();
            expect(roleTest).toEqual(internRole);
        })
    });
});