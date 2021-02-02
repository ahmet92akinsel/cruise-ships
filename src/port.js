class Port {
    constructor (name,ship) {
        this.name = name; 
        this.ship = ship;      
    };
    addShip() {
        const ship = this.ship;
    };
    removeShip() {

    };
};

/*Port.prototype.addShip = function () {
    const ship = this.ship
};

Port.prototype.removeShip = function () {
    c
}; */

module.exports = Port;