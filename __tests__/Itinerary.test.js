const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/port.js')

describe('tests',() => {  

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');    
    });
    
describe('Itinerary',() => {
    it('can be instantiated',() => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has ports', () => {
        const itinerary = new Itinerary([dover,calais]);
        expect(itinerary.ports).toEqual([dover,calais]);
    });
    });
});