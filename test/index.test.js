const {add} = require('../modules/maths');


test('adds 1 and 3', ()=> {
    expect(add(1,3)).toBe(4);
})
