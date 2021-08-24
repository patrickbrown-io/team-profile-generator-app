const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Can create an employee", () => {
        it("Should create an employee object", () => {
            const john = new Employee();
            expect(typeof(john)).toBe("object")
        });
    });

    describe("Can customize name, via constructor", () => {
        it("Allows names to be passed as arguments", () => {
            const name = "John";
            const employee1 = new Employee(name);
            expect(employee1.name).toBe(name);
        });
    });

    describe("Can customize id, via constructor", () => {
        it("Allows ids to be passed as arguments", () => {
            const ident = 100;
            const employee1 = new Employee("NAME",ident);
            expect(employee1.id).toBe(ident);
        });
    });

    describe("Can customize email, via constructor", () => {
        it("Allows emails to be passed as arguments", () => {
            const testEmail = "test@test.com";
            const employee1 = new Employee("NAME",100,testEmail);
            expect(employee1.email).toBe(testEmail);
        });
    });

    describe("getName()", () => {
        it("The getName() function works", () => {
            const testName = "John";
            const employee1 = new Employee(testName);
            expect(employee1.getName()).toBe(testName);
        });
    });

    describe("getId()", () => {
        it("The getId() function works", () => {
            const testId = "John";
            const employee1 = new Employee("John",testId);
            expect(employee1.getId()).toBe(testId);
        });
    });

    describe("getEmail()", () => {
        it("The getEmail() function works", () => {
            const testEmail = "test@test.com";
            const employee1 = new Employee("John",100,testEmail);
            expect(employee1.getEmail()).toBe(testEmail);
        });
    });

    describe("getRole()", () => {
        it("The getRole() function works", () => {
            const testRole = "employee";
            const employee1 = new Employee("John",100,"test@test.com");
            expect(employee1.getRole()).toBe(testRole);
        });
    });

});
