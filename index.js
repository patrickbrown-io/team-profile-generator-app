const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs")
//needed?
const path = require('path')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//HTML builder --STILL NEEDS TO BE BUILT
const builder = require("./src/generateHTML")
//empty array that can store the team members in, Name ID and Email are in every array becase each array becasue that information is prevalent to every employee 
const teamArray = [];

function makeTeam() {
    fs.writeFile(outputPath, builder(teamArray), function(err) {
        if (err) { 
            return console.log(err)
        }
    })
}



//////QUESTIONS
// Manager: 
const managerQuestions = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the name of the manager of this team, or your name if you are the manager. '
    },

    {
        type: 'input',
        name: 'managerId',
        message: 'What is this managers ID number?'
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is this managers Email address?'
    },

    {
        type: 'input',
        name: 'office',
        message: 'What is this managers office number?'
    },
]

//Engineer: 
const engineerQuestions = [

    {
        type: 'input',
        name: 'engineerName',
        message: 'Enter the name of this engineer:'
    },

    {
        type: 'input',
        name: 'engineerId',
        message: 'Enter the ID number for this engineer:'
    },

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter the email address for this engineer:'
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter this engineers GitHub user name:'
    },
]

//Intern:
const internQuestions = [

    {
        type: 'input',
        name: 'internName',
        message: 'Enter the name of this intern:'
    },

    {
        type: 'input',
        name: 'internId',
        message: 'Enter the ID number for this intern:',
    },

    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the email address for this intern:'
    },

    {
        type: 'input',
        name: 'school',
        message: 'What school does this intern attend?',
    },
]

const anotherQuestion = [
    { 
        type: 'list',
        name: 'nextEmployee',
        message: 'Select the next type of employee you would like to add. If done, please select Done to generate the page',
        choices: ['Engineer','Intern','Done']
    }    
]
/////This kicks off the app
function init(){
    managerPrompt();
}

///manager prompts --takes manager responses
function managerPrompt() {
    inquirer.prompt(managerQuestions).then((response) => {
        let name = response.managerName;
        let id = response.managerId;
        let email = response.managerEmail;
        let office = response.office;
        //creates a new manager
        const manager = new Manager(name, id, email, office);
        teamArray.push(manager);
        next();
    })
}
///engineer prompts -- takes engineer responses
function engineerPrompt(){
    inquirer.prompt(engineerQuestions).then((response => {
        let name = response.engineerName;
        let id = response.engineerId;
        let email = response.engineerEmail;
        let github = response.github;

        const engineer = new Engineer(name,id, email,github);
        teamArray.push(engineer);
        next();
    }))
}
///intern prompt - takes intern responses
function internPrompt(){
    inquirer.prompt(internQuestions).then((response => {
        let name = response.internName;
        let id = response.internId;
        let email = response.internEmail;
        let school= response.school;

        const intern = new Intern(name,id,email,school);
        teamArray.push(intern);
        next();
    }))
}
//next question prompt
function next() {
    inquirer.prompt(anotherQuestion).then((response => {
        switch(response.nextEmployee){
            case 'Engineer':
                engineerPrompt();
                break;
            case 'Intern':
                internPrompt();
                break;
            case 'Done':
                console.log(teamArray)
                console.log("Now creating your team...")
                ////////FUNCTION TO MAKE TEAM NEEDED HERE
                makeTeam();
                console.log('Completed!')
        }
    }))
}

init();