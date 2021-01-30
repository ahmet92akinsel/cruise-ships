const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/port.js')

describe('Itinerary',() => {
    it('can be instantiated',() => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has ports', () => {
        const dover = new Port('Dover');
        const calais = new Port('Calais');

        const itinerary = new Itinerary([dover,calais]);
        expect(itinerary.ports).toEqual([dover,calais]);
    });
});