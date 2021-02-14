
class Port {
    constructor (name) {
        this.name = name; 
        this.port = 'Dover';
        this.ships = [];      
    };

   
addShip(ship) {
   this.ships.push(ship);
    
};

removeShip() {
    this.ships.filter(ship => (ship));
    //this.ship.pop();
    
}; 
};

module.exports = Port;