// class function intern
const Intern = require('../lib/intern')
const morgan = new Intern("Morgan", 12345, "mo.sherrill@outlook.com", "UW Coding Bootcamp", "Intern");
describe('Intern', () => {
    // Test for adding a new Intern object
    describe('NewIntern', () => {
        it("Should create a new intern object including name, id, email, github, and role", () => {
            // Verify that the new object has the correct properties
            expect(morgan.name).toEqual("Morgan")
            expect(morgan.id).toEqual(12345)
            expect(morgan.email).toEqual("mo.sherrill@outlook.com")
            expect(morgan.school).toEqual("UW Coding Bootcamp"),
            expect(morgan.role).toEqual("Intern")
        })
        it("Interns's name, email, github, and role should be a strings", () => {
            expect(typeof morgan.name).toBe('string')
            expect(typeof morgan.email).toBe('string')
            expect(typeof morgan.school).toBe('string')
            expect(typeof morgan.role).toBe('string')
        })
        it("Intern's id should be a number", () => {
            expect(typeof morgan.id).toBe('number')
        })
        it("new Intern should be an object", () => {
            expect(typeof new Intern).toBe('object')
        })
        it('Intern should be a function', () => {
            expect(typeof Intern).toBe('function')
        })
    })
})
