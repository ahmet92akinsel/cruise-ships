const Port = require('../src/port.js')



describe('tests',() => {  

  let dover;
  let calais;
  let port;

  beforeEach(() => {
      dover = new Port('Dover');
      calais = new Port('Calais');
      port = new Port;    
  });

describe('Port', () => {
   it('can be instantiated',() => {
     expect(new Port()).toBeInstanceOf(Object);
    });
});
describe('addShip method',() => {
  it('can add ship to the port', () => {
    
    const ship = [];
    
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});

describe('removeShip method', () => {
  it('can remove ship from the port', () => {
   

    const ship = [];
    port.removeShip(ship);
    expect(port.ships).toEqual([]);

  });
});
});