const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, Github) {
    super(name, id, email,)
    this.Github = Github;
    this.role = 'Engineer'
  }

  theGit() {
    return this.Github;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Engineer;
