const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber, role) {

    super(name, id, email)
    this.officeNumber = officeNumber
    this.role = "Team Manager"
  }

  getOfficeNumber() {
      return officeNumber
  }

}


module.exports = Manager