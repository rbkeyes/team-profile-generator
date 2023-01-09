// class contructor
const Engineer = require('../lib/Engineer');

// const to be used for test
const internObj = {name: 'Toni', id: 3, email: "toni@email.com", school: 'Pretty Good University'};
console.log(internObj);
const internTest = new Engineer('Toni', 3, 'toni@email.com', 'Pretty Good University')
console.log(internTest);

// tests for intern 
describe('Intern class', () => {
    it('Should return an employee object containing name of school in addition to basic employee info', () => {
        expect(internTest).toEqual(internObj);
    });

    describe('getRole method', () => {
        it('Should return "Intern"', () => {
            const internRole = "Intern";
            console.log(internRole);
            const roleTest = internTest.getRole();
            console.log(roleTest);
            expect(roleTest).toEqual(internTest);
        })
    });
});