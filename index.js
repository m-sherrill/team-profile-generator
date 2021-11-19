const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager");

let employeesArray = []

// starting questions manager
const questionsManager = [
  {
    name: "teamName",
    type: "input",
    message: "What is your team name?",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please enter a team name");
      }
      return true;
    },
  },
    {
      name: 'name',
      type: 'input',
      message: 'What is your name?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter a name");
        }
        return true;
      },
    },
    {
      name: 'id',
      type: 'input',
      message: 'What is your employee ID number?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter an ID number");
        }
        return true;
      },
    },
    {
      name: 'email',
      type: 'input',
      message: 'What is your email address?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter an email address");
        }
        return true;
      },
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: 'What is your office number?',
        validate: function (answer) {
          if (answer.length < 1) {
            return console.log("You must enter an office number");
          }
          return true;
        },
      }
    ]

    // adding a new employee
  const newEmployeeQuestions = [
    {
      name: 'newEmployee',
      type: 'confirm',
      message: 'Would you like to add a new employee?',
    }
  ]

  const questionsEmployees = [
    {
      name: 'role',
      type: 'list',
      message: 'Is this employee an engineer or intern?',
      choices: ["Engineer", "Intern"],
    },
    {
      name: 'name',
      type: 'input',
      message: 'What is your name?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter a name");
        }
        return true;
      },
    },
    {
      name: 'id',
      type: 'input',
      message: 'What is your employee ID number?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter an ID number");
        }
        return true;
      },
    },
    {
      name: 'email',
      type: 'input',
      message: 'What is your email address?',
      validate: function (answer) {
        if (answer.length < 1) {
          return console.log("You must enter an email address");
        }
        return true;
      },
    },
    {
        name: 'school',
        type: 'input',
        message: 'What is the name of your school?',
        when: (answers) => answers.role === "Intern"
      },
      {
        name: 'github',
        type: 'input',
        message: 'What is the name of GitHub username?',
        when: (answers) => answers.role === "Engineer"
      },
      {
        name: 'github',
        type: 'input',
        message: 'What is the name of GitHub username?',
        when: (answers) => answers.role === "Engineer"
      },
    ]
  
    

function init() {
    inquirer.prompt(questionsManager) 
    .then((answers) => {
        const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, answers.role)
        employeesArray.push(newManager)
        console.log(employeesArray)
        console.log(answers.teamName)
        newEmployeeConfirm(answers) 
    })
    
}

function newEmployeeConfirm(data) {
inquirer.prompt(newEmployeeQuestions)
    .then((answers) => {
        console.log(answers)
        if (answers.newEmployee === true) {
          console.log("true true")
          newEmployeeAdd()
        } else {
          console.log("Thank you for your input")
        }
    })
}

function newEmployeeAdd(data) {
  inquirer.prompt(questionsEmployees)
    .then((answers) => {
        if (answers.role == "Intern") {
          const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school, answers.role)
          employeesArray.push(newIntern)
        } else if (answers.role == "Engineer") {
          const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github, answers.role)
          employeesArray.push(newEngineer)
        }
        console.log(employeesArray)
        newEmployeeConfirm()
})
}




init()