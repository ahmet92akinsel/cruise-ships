const Port = require('../src/port.js')

describe('Port', () => {
   it('can be instantiated',() => {
     expect(new Port()).toBeInstanceOf(Object);
    });
});
describe('addShip method',() => {
  it('can add ship', () => {
    const port = new Port('Dover');
    const ship = {};
    
    port.addShip(ship);
    expect(port.ships).toEqual(ship);
  });
});

describe('removeShip method', () => {
  it('can remove ship', () => {

  });
});