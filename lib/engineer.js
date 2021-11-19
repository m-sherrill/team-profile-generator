const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub, role) {
      
        super(name, id, email)
        this.github = gitHub
        this.role = "Engineer"
      }
     
      getGithub(github) {
        return github
      }
    
}

module.exports = Engineer