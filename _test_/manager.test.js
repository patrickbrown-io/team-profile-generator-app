const Manager = require("../lib/Manager")
const Employee = require("../lib/Employee")

describe("Manager", () => {
    describe("Office Number", () => {
        it("Should setup office number via constructor", () => {
            const testOffice = 10;
            const manager1 = new Manager("John",100,"test@test.com",testOffice)
            expect(manager1.officeNumber).toBe(testOffice)
        });
    });

    describe("getRole Manager", () => {
        it("getRole will return Manager", () => {
            const testValue = "Manager";
            const manager1 = new Manager("John",100,"test@test.com",10)
            expect(manager1.getRole()).toBe(testValue)
        });
    });

    describe("getOffice", () => {
        it("getOffice should return office number", () => {
            const testOffice = 10;
            const manager1 = new Manager("John",100,"test@test.com",testOffice)
            expect(engineer1.getOffice()).toBe(testOffice)
        });
    });
});