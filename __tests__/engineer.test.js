// class function engineer
const Engineer = require('../lib/engineer')
const morgan = new Engineer("Morgan", 12345, "mo.sherrill@outlook.com", "m-sherrill", "Engineer");

describe('Engineer', () => {
    // Test for adding a new engineer object
    describe('NewEngineer', () => {
        it("Should create a new engineer object including name, id, email, github, and role", () => {
        
            // Verify that the new object has the correct properties
            expect(morgan.name).toEqual("Morgan")
            expect(morgan.id).toEqual(12345)
            expect(morgan.email).toEqual("mo.sherrill@outlook.com")
            expect(morgan.github).toEqual("m-sherrill"),
            expect(morgan.role).toEqual("Engineer")
        })
        it("engineer's name, email, github, and role should be a strings", () => {
            expect(typeof morgan.name).toBe('string')
            expect(typeof morgan.email).toBe('string')
            expect(typeof morgan.github).toBe('string')
            expect(typeof morgan.role).toBe('string')
        })
        it("engineer's id should be a number", () => {
            expect(typeof morgan.id).toBe('number')
        })
        it("new Engineer should be an object", () => {
            expect(typeof new Engineer).toBe('object')
        })
        it('Engineer should be a function', () => {
            expect(typeof Engineer).toBe('function')
        })

        })
    })
