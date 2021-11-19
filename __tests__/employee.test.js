// class function employee
const Employee= require('../lib/employee')
const morgan = new Employee("Morgan", 12345, "mo.sherrill@outlook.com");

describe('Employee', () => {
    // Test for adding a new Intern object
    describe('newEmployee', () => {
        it("Should create a new employee object including name, id, email", () => {
            // Verify that the new object has the correct properties
            expect(morgan.name).toEqual("Morgan")
            expect(morgan.id).toEqual(12345)
            expect(morgan.email).toEqual("mo.sherrill@outlook.com")
        })
        it("Employee's name and email should be a strings", () => {
            expect(typeof morgan.name).toBe('string')
            expect(typeof morgan.email).toBe('string')
        })
        it("Employee's id should be a number", () => {
            expect(typeof morgan.id).toBe('number')
        })
        it("new Employee should be an object", () => {
            expect(typeof new Employee).toBe('object')
        })
        it('Employee should be a function', () => {
            expect(typeof Employee).toBe('function')
        })
    })
})