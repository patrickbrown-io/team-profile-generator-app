const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("School", () => {
        it("Should set school via constructor", () => {
            const testSchool = "DU";
            const intern1 = new Intern("John",100,"test@test.com",testSchool)
            expect(intern1.school).toBe(testSchool)
        });
    });

    describe("getRole Intern", () => {
        it("getRole will return Intern", () => {
            const testValue = "Intern";
            const intern1 = new Intern("John",100,"test@test.com","DU")
            expect(intern1.getRole()).toBe(testValue)
        });
    });

    describe("getSchool", () => {
        it("getSchool on Intern will return proper school", () => {
            const testSchool = "DU";
            const intern1 = new Intern("John",100,"test@test.com",testSchool)
            expect(intern1.getSchool()).toBe(testSchool)
        });
    });
});