// parent class

const { name } = require("ci-info");

class Employee {
    constructor(name, id, email) {

      this.name = name
      this.id = id
      this.email = email
    }

    getName() {
        return name
    }

    getId() {
        return id
    }

    getEmail() {
        return email
    }


  }


  
  module.exports = Employee;