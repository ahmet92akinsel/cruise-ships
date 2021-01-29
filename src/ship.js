/*class Ship {
    constructor(startingPort){
        this.startingPort = startingPort;
    }
}; */



function Ship(startingPort) {
    this.startingPort = startingPort
};

Ship.prototype.setSail = function() {
    this.startingPort = '';
};

module.exports = Ship;



