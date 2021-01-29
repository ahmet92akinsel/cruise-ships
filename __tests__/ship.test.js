/*globals describe it expect*/
const Ship = require('../src/ship.js')

/*let ship;
beforeEach(() => {});
ship = new Ship();*/

describe('Ship',() => {
    it('can be instantiated',() => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});
    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
describe('set sail function', () => {
    it('can sail from the startingPort', () => {
        const ship = new Ship('Dover')
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});
