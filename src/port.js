
class Port {
    constructor (name) {
        this.name = name; 
        this.ships = [];      
    };

   
addShip(ship) {
   this.ships.push(ship);
    
};

removeShip() {
    this.ships.filter(x => (x));
    
}; 
};

module.exports = Port;