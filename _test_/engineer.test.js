const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Github", () => {
        it("Github is setup via constructor", () => {
            const testGit = "Githubuser";
            const engineer1 = new Engineer("John",100,"test@test.com",testGit)
            expect(engineer1.github).toBe(testGit)
        });
    });

    describe("getRole Engineer", () => {
        it("getRole will return Engineer", () => {
            const testValue = "Engineer";
            const engineer1 = new Engineer("John",100,"test@test.com","Githubuser")
            expect(engineer1.getRole()).toBe(testValue)
        });
    });

    describe("getGithub", () => {
        it("getGithub on Engineer will return Github username", () => {
            const testGit = "Githubuser";
            const engineer1 = new Engineer("John",100,"test@test.com",testGit)
            expect(engineer1.getGithub()).toBe(testGit)
        });
    });
});