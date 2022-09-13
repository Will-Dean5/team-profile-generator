const Intern = require("../lib/Intern");

describe("Intern", () => {
    it('should set school', () => {
        const obj = new Engineer('John', 30, 'email@example.com', 'WCU');
        const val = 'WCU';
        expect(obj.School).toEqual(val);
    })

    it('should return role', () => {
        const obj = new Engineer('John', 30, 'email@example.com', 'WCU');
        const val = 'Engineer';
        expect(obj.getRole()).toEqual(val);
    })

    it('should set School', () => {
        const obj = new Engineer('John', 30, 'email@example.com', 'WCU');
        const val = 'WCU';
        expect(obj.theSchool()).toEqual(val);
    })
});
