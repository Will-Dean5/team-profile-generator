const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
//const questionsMan = require('./src/questionsMan');
//const questionsEng = require('./src/questionsEng');
//const questionsInt = require('./src/questionsInt');
const template = require('./src/page-template');
const pageTemplate = require('./src/page-template');
const prompt = inquirer.createPromptModule();
const team = [];
// TODO: CODE GOES HERE
const questions = [
    {
        name: 'name',
        type: 'input',
        question: 'what is the Interns name',
    },
    {
        name: 'id',
        type: 'number',
        question: 'what is the Interns id',
    },
    {
        name: 'email',
        type: 'input',
        question: 'what is the Interns email',
    },
    {
        name: 'school',
        type: 'input',
        question: 'what is the Interns school',
    },
]

const questions1 = [
    {
        name: 'name',
        type: 'input',
        question: 'what is the Engineers name',
    },
    {
        name: 'id',
        type: 'number',
        question: 'what is the Engineers id',
    },
    {
        name: 'email',
        type: 'input',
        question: 'what is the Engineers email',
    },
    {
        name: 'github',
        type: 'input',
        question: 'what is the Engineers github',
    },
];

const questions2 = [
    {
        name: 'name',
        type: 'input',
        question: 'what is the Managers name',
    },
    {
        name: 'id',
        type: 'number',
        question: 'what is the Managers id',
    },
    {
        name: 'email',
        type: 'input',
        question: 'what is the Managers email',
    },
    {
        name: 'officeNum',
        type: 'input',
        question: 'what is the Managers office number',
    },
]

function newMember() {
    prompt([{
        name: 'value',
        type: 'list',
        question: 'What type of team member do you want to add',
        choices: [
            'Engineer',
            'Intern',
            'Im done',
        ],
    }]).then((answer) => {
        console.log(answer);
        if (answer.value === 'Engineer') {
            prompt(questions1).then((data) => {
                const newEng = new Engineer(data.name, data.id, data.email, data.github);
                team.push(newEng);
                newMember();
            })
        }
        if (answer.value === 'Intern') {
            prompt(questions).then((data) => {
                const newInt = new Intern(data.name, data.id, data.email, data.school);
                team.push(newInt);
                newMember();
            })
        }
        if(answer.value === 'Im done') {
            console.log(team);
            fs.writeFile(`dist/team.html`, pageTemplate(team),function() {
                console.log('success');
            } )
        }
    });
    
}
function init() {
    prompt(questions2).then((data) => {
        const theManager = new Manager(data.name, data.id, data, data.email, data.officeNum);
        team.push(theManager);
        newMember();
    } ) 
}

init();