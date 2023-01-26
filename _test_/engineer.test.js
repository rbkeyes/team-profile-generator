// class contructor
const Engineer = require('../lib/Engineer');

// const to be used for test
const engineerObj = {name: 'Parker', id: 2, email: "parker@email.com", gitHub: 'pretendparker'};
const testObj = {name: 'Parker', id: 2, email: "parker@email.com", gitHub: 'pretendparker'};
const engineerTest = new Engineer(testObj);

// tests for engineer 
describe('Engineer class', () => {
    it('Should return an employee object containing github username in addition to basic employee info', () => {
        expect(engineerTest).toEqual(engineerObj);
    });

    describe('getRole method', () => {
        it('Should return "Engineer"', () => {
            const engineerRole = "Engineer";
            const roleTest = engineerTest.getRole();
            expect(roleTest).toEqual(engineerRole);
        })
    });
});