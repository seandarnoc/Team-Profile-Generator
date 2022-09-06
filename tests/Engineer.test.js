const Engineer = require('../lib/Engineer.js');


test('creates an Engineer object', () => {
    const engineer = new Engineer('Sean', 1, 'sean@noemail.com', 'xyz123');
    
    expect(engineer.github) .toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('Sean', 1, 'sean@noemail.com', 'xyz123');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('gets role of employee', () => {
    const engineer = new Engineer('Sean', 1, 'sean@noemail.com', 'xyz123');

    expect(engineer.getRole()).toEqual("Engineer");
});