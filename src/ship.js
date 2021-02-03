/*class Ship {
    constructor(startingPort){
        this.startingPort = startingPort;
    }
}; */

function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previusPort = null;
    
};

Ship.prototype.setSail = function() {
    const itinerary = this.itinerary;
    const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

    if(currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error ('End of itinerary reached');
    };

    this.previusPort = this.currentPort;
    this.currentPort = null;
};

Ship.prototype.dock = function() {
    const itinerary = this.itinerary;
    const previousIndex = itinerary.ports.indexOf(this.previusPort);
    this.currentPort = itinerary.ports[previousIndex + 1];
};





module.exports = Ship;


