class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  theName() {
    return this.name;
  }

  theId() {
    return this.id;
  }

  theEmail() {
    return this.email;
  }

  getRole() {
    return this.getRole;
  }

}

module.exports = Employee;
