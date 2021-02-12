
class Port {
    constructor (name) {
        this.name = name; 
        this.ships = [];      
    };

   
addShip(ship) {
   this.ships.push(ship);
    
};

removeShip() {
    this.ships.filter(ship => (ship));
    //this.ships.pop();
    
}; 
};

module.exports = Port;