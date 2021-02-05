const Port = require('../src/port.js')

describe('Port', () => {
   it('can be instantiated',() => {
     expect(new Port()).toBeInstanceOf(Object);
    });
});
describe('addShip method',() => {
  it('can add ship to the port', () => {
    const port = new Port('Dover');
    const ship = [ships];
    
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});

/*describe('removeShip method', () => {
  it('can remove ship from the port', () => {
    port.removeShip(ship);
    expect().toEqual([]);

  });
});*/