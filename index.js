const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager");
const generateTeam = require("./utils/generateteam")


let employeesArray = []

// starting questions manager
const questionsManager = [
  {
    name: "teamName",
    type: "input",
    message: "What is your team name?",
    default: "Super Awesome Crew",
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
    default: "Morgan Sherrill",
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
    default: "120",
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
    default: "mo.sherrill@outlook.com",
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
    default: "425-895-1465",
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
    message: 'What is their name?',
    default: "Keith Sherrill",
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
    message: 'What is their employee ID number?',
    default: "152",
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
    message: 'What is their email address?',
    default: "mo.sherrill@outlook.com",
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
    message: 'What is the name of their school?',
    default: "University of Washington",
    when: (answers) => answers.role === "Intern",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter an office number");
      }
      return true;
    }
  },
  {
    name: 'github',
    type: 'input',
    message: 'What is their GitHub username?',
    default: "m-sherrill",
    when: (answers) => answers.role === "Engineer",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter an office number");
      }
      return true;
    }
  },
]

function init() {
  console.log(chalk.bold.magenta("Welcome! Let's compile your team roster!"))
  console.log(chalk.bold.green("You, as the team manager, should enter your information first. There will be an option to enter in the rest of your team after your information is complete!"))
  inquirer.prompt(questionsManager)
    .then((answers) => {
      const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber, answers.role)
      let teamName = answers.teamName
      employeesArray.push(teamName)
      employeesArray.push(newManager)
      newEmployeeConfirm(answers)
    })

}

function newEmployeeConfirm(data) {
  inquirer.prompt(newEmployeeQuestions)
    .then((answers) => {
      if (answers.newEmployee === true) {
        newEmployeeAdd(answers)
      } else {
        console.log(chalk.bold.red("Thank you for your input"))
        writeData(employeesArray)

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
      newEmployeeConfirm(data)


    })
}

function writeData(employeesArray, teamName) {
  fs.writeFile('./dist/index.html', generateTeam(employeesArray),
    (err) =>
      err ? console.error(err) : console.log(chalk.bold.magenta("Your team profile page has been compiled! ... view it here ./dist/index.html"))
  )
}


init()

