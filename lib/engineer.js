const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub, role) {
      
        super(name, id, email)
        this.gitHub = gitHub
        this.role = "Engineer"
      }
     
      getGithub(gitHub) {
        return gitHub
      }
    
}

module.exports = Engineer