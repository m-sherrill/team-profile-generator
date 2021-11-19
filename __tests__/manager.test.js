// class function intern
const Manager = require('../lib/manager')
const morgan = new Manager("Morgan", 12345, "mo.sherrill@outlook.com", "425-895-1465", "Team Manager");

describe('Manager', () => {
    // Test for adding a new Intern object
    describe('newManager', () => {
        it("Should create a new manager object including name, id, email, officeNumber, and role", () => {
            // Verify that the new object has the correct properties
            expect(morgan.name).toEqual("Morgan")
            expect(morgan.id).toEqual(12345)
            expect(morgan.email).toEqual("mo.sherrill@outlook.com")
            expect(morgan.officeNumber).toEqual("425-895-1465"),
            expect(morgan.role).toEqual("Team Manager")
        })
        it("Interns's name, email, github, and role should be a strings", () => {
            expect(typeof morgan.name).toBe('string')
            expect(typeof morgan.email).toBe('string')
            expect(typeof morgan.officeNumber).toBe('string')
            expect(typeof morgan.role).toBe('string')
        })
        it("Intern's id should be a number", () => {
            expect(typeof morgan.id).toBe('number')
        })
        it("new Manager should be an object", () => {
            expect(typeof new Manager).toBe('object')
        })
        it('Manager should be a function', () => {
            expect(typeof Manager).toBe('function')
        })
    })
})
