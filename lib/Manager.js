const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email,)
    this.officeNum = officeNum;
    this.role = 'Manager'
  }

  theOfficeNum() {
    return this.officeNum;
  }

  getRole() {
    return this.getRole;
  }
}

module.exports = Manager;
