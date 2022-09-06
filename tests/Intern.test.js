const Intern = require('../lib/Intern.js');


test('creates an Intern object', () => {
    const intern = new Intern('Sean', 1, 'sean@noemail.com', 'Georgia Tech');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Sean', 1, 'sean@noemail.com', 'Georgia Tech');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Sean', 1, 'sean@noemail.com.com', 'Georgia Tech');

    expect(intern.getRole()).toEqual("Intern");
}); 