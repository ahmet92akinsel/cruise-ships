const Port = require('../src/port.js')

describe('tests',() => {  
  
  let port;;

  beforeEach(() => {
      port = new Port('Dover');      
         
  });

describe('Port', () => {
   it('can be instantiated',() => {

     expect(new Port()).toBeInstanceOf(Object);
    });
});

describe('name property', () => {
  it('sets the name property', () => {
      const port = new Port ('Dover');       
      expect(port.name).toEqual('Dover');
      
  });
});
describe('add new ship method',() => {
  it('can add ship to the port', () => {
    
    //const ship = [];
    const ship = jest.fn();
    
    port.addShip(ship);
    expect(port.ships).toContain(ship);
  });
});

describe('remove ship method', () => {
  it('can remove ship from the port', () => {

    const ship = jest.fn();      
    const blackPearl = jest.fn();
    const flyingDutchman = jest.fn();
   
    port.removeShip(ship);
    port.addShip(blackPearl);
    port.removeShip(flyingDutchman);
    expect(port.ships).toEqual([blackPearl]);

  });
 });
});