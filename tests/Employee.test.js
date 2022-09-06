const Employee = require('../lib/Employee.js');

 
test('creates an employee object', () => {
    const employee = new Employee('Sean', 1, 'sean@noemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('gets employee name', () => {
    const employee = new Employee('Sean', 1, 'sean@noemail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


test('gets employee ID', () => {
    const employee = new Employee('Sean', 1, 'sean@noemail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Employee('Sean', 1, 'sean@noemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});



