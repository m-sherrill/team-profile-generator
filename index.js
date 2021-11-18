const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager");



const newManager = new Manager("morgan", 123, "mo.sherrill@outlook.com", "425-895-1465");
const newIntern = new Intern("morgan", 123, "mo.sherrill@outlook.com", "UW!!!!");
const newEngineer = new Engineer("morgan", 123, "mo.sherrill@outlook.com", "m-sherrill");

console.log(newManager.officeNumber)