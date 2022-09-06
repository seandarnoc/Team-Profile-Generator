const Manager = require('../lib/Manager.js');

 
test('creates an Manager object', () => {
    const manager = new Manager('Sean', 1, 'sean@noemail.com', 123-456-7891);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employee number', () => {
    const manager = new Manager('Sean', 1, 'sean@noemail.com', '123-456-7891');
    
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});
// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Sean', 1, 'sean@noemail.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 