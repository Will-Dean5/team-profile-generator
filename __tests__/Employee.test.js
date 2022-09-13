const Employee = require("../lib/Employee");

describe("Employee", () => {
    const obj = new Employee();
    expect(obj instanceof Employee).toEqual(true);
    
    it('should set name', () => {
        const obj = new Employee('Jack', 25, 'example@email.com');
        const sampleName = 'Jack';
        expect(obj.name).toEqual(sampleName);
    })
    
    it('should set id', () => {
        const obj = new Employee('Jack', 25, 'example@email.com');
        const sampleId = 25;
        expect(obj.id).toEqual(sampleId);
    })
    
    it('should set email', () => {
        const obj = new Employee('Jack', 25, 'example@email.com');
        const sampleEmail = 'example@email.com';
        expect(obj.email).toEqual(sampleEmail);
    })
    
    it('should get name', () => {
        const obj = new Employee('Jack', 25, 'example@email.com');
        const sampleName = 'Jack';
        expect(obj.theName).toEqual(sampleName);
    })
    
    it('should get id', () => {
        const obj = new Employee('Jack', 25, 'example@email.com');
        const sampleId = 25;
        expect(obj.theId).toEqual(sampleId);
    })
    
    it('should email', () => {
        const obj = new Employee('Jack', 25, 'example@email.com');
        const sampleEmail = 'example@email.com';
        expect(obj.theEmail).toEqual(sampleEmail);
    })
    
    it('should return "Employee', () => {
        const obj = new Employee('Jack', 25, 'example@email.com');
        const val = 'Employee';
        expect(obj.getRole).toEqual(val);
    })
});