const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager");
const generateTeam = require("./src/generateteam")


let employeesArray = []

// starting questions manager
const questionsManager = [
  {
    name: "teamName",
    type: "input",
    message: "What is your team name?",
    default: "Super Awesome Team",
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
      choices: ["Engineer", "Intern", "Finish Building Team"],
    },
    {
      name: 'name',
      type: 'input',
      message: 'What is your name?',
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
      message: 'What is your employee ID number?',
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
        name: 'school',
        type: 'input',
        message: 'What is the name of your school?',
        default: "University of Washington",
        when: (answers) => answers.role === "Intern"
      },
      {
        name: 'github',
        type: 'input',
        message: 'What is the name of GitHub username?',
        default: "m-sherrill",
        when: (answers) => answers.role === "Engineer"
      },
    ]
  
    

function init() {
  console.log("Welcome! Let's compile your team roster. The information for your team manager should be added first")
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
          console.log("Thank you for your input")
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
  fs.writeFile('./dist/indexfun.html', generateTeam(employeesArray, teamName),
    (err) =>
      err ? console.error(err) 
  )
}


init()

