const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('should set git hub', () => {
        const obj = new Engineer('Joe', 24, 'email@example.com', 'JoeShmoe');
        const val = 'JoeShmoe';
        expect(obj.Github).toEqual(val);
    })

    it('should return role', () => {
        const obj = new Engineer('Joe', 24, 'email@example.com', 'JoeShmoe');
        const val = 'Engineer';
        expect(obj.getRole()).toEqual(val);
    })

    it('should set git hub', () => {
        const obj = new Engineer('Joe', 24, 'email@example.com', 'JoeShmoe');
        const val = 'JoeShmoe';
        expect(obj.theGit).toEqual(val);
    })
});
