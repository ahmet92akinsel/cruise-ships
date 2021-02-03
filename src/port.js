class Port {
    constructor (name,ship) {
        this.name = name; 
        this.ship = ship;      
    };
};
   
Port.prototype.addShip = function () {
    const ship = this.ship;
};

Port.prototype.removeShip = function () {
    
}; 

module.exports = Port;