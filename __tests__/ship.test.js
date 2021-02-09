/*globals describe it expect*/
const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/Itinerary');

describe('tests',() => {  

    let ship;
    let dover;
    let calais;
    let itinerary;
    
beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);

});

describe('Ship',() => {
    it('can be instantiated',() => {        
        
        expect(ship).toBeInstanceOf(Object);
    });
});
    it('has a starting port', () => {
       
        expect(ship.currentPort).toBe(dover);
    });
describe('set sail method', () => {
    it('can set sail', () => {
       
        ship.setSail();
      
        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(Ship);
      });
});

describe('dock method', () => {
    it('can dock at a different port',()=>{
       
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    });
});

describe('ship cant sail without itinerary', () => {
    it('can\'t sail further than its itinerary', () => {
       
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});
    it('gets added to port on instantiation', () => {

  
    expect(dover.ships).toContain(ship);
  });
});