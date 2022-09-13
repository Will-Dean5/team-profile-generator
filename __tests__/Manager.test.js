const Manager = require("../lib/Manager");

describe("Manager", () => {
    it('should set office number', () => {
        const obj = new Engineer('Johnson', 10, 'email@example.com', 18);
        const val = '18';
        expect(obj.officeNum).toEqual(val);
    })

    it('should return role', () => {
        const obj = new Engineer('Johnson', 10, 'email@example.com', 18);
        const val = 'Manager';
        expect(obj.getRole()).toEqual(val);
    })

    it('should set office muber', () => {
        const obj = new Engineer('Johnson', 10, 'email@example.com', 18);
        const val = '18';
        expect(obj.theOfficeNum()).toEqual(val);
    })
});

