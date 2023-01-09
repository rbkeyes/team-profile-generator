// class contructor
const Engineer = require('../lib/Engineer');

// const to be used for test
const engineerObj = {name: 'Parker', id: 2, email: "parker@email.com", gitHub: 'pretendparker'};
console.log(engineerObj);
const engineerTest = new Engineer('Parker', 2, 'parker@email.com', 'pretendparker')
console.log(engineerTest);

// tests for engineer 
describe('Engineer class', () => {
    it('Should return an employee object containing github username in addition to basic employee info', () => {
        expect(engineerTest).toEqual(engineerObj);
    });

    describe('getRole method', () => {
        it('Should return "Engineer"', () => {
            const engineerRole = "Engineer";
            console.log(engineerRole);
            const roleTest = engineerTest.getRole();
            console.log(roleTest);
            expect(roleTest).toEqual(engineerRole);
        })
    });
});