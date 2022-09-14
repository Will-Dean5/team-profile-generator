const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, School) {
    super(name, id, email,)
    this.School = School;
    this.role = 'Intern'
  }

  theSchool() {
    return this.School;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Intern;
