const Port = require('../src/port.js')

describe('Port', () => {
   it('can be instantiated',() => {
     expect(new Port()).toBeInstanceOf(Object);
    });
});
