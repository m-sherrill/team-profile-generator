const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.name = name
    this.id = id
    this.email = email
    this.school = school    
  }

  getSchool() {
    return school
  }
}



module.exports = Intern