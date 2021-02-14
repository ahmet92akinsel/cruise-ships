const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/port.js')

describe('tests',() => {  
    let dover;
    let calais;

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');    
    });

describe('Itinerary constructor',() => {
    it('should create a new itinerary object(instance)',() => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
});
describe('port property',() => {
    it('itinerary has ports', () => {
        const itinerary = new Itinerary([dover,calais]);
        expect(itinerary.ports).toEqual([dover,calais]);
    });
});
});
   
    
