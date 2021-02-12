const Port = require('../src/port.js')

describe('tests',() => {  

  
  let port;
  let port1;

  beforeEach(() => {
      port = new Port('Dover');
      port1 = new Port('Calais');
         
  });

describe('Port', () => {
   it('can be instantiated',() => {
     expect(new Port()).toBeInstanceOf(Object);
    });
});

describe('name property', () => {
  test('sets the name property', () => {
      const port = new Port ('Dover');
      const port1 = new Port('Calais')    

      expect(port.name).toEqual('Dover');
      expect(port1.name).toEqual('Calais');
  });
});
describe('add new ship method',() => {
  it('can add ship to the port', () => {
    
    const ship = [];
    //const ship = jest.fn();
    
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});

describe('remove ship method', () => {
  it('can remove ship from the port', () => {
   

    const ship = [];
    port.removeShip(ship);
    expect(port.ships).toEqual([]);

  });
});
});