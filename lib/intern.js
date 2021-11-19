const Employee = require('./employee');

class Intern extends Employee {
  constructor(name, id, email, school, role) {
    super(name, id, email);
    this.school = school
    this.role = "Intern"    
  }

  getSchool() {
    return school
  }
}



module.exports = Intern