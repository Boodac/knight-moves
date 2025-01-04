export default class Node {
    #coordinate // the internal coordinate represented as [intX, intY]
    #cipher = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
    constructor(coordinate) { 
        this.#coordinate = this.#splitCoords(coordinate);
        this.edges = this.findEdges();
    };

    get coordinate() { // the external coordinate, in chess notation
        return this.#joinCoords(this.#coordinate);
    };

    findEdges(node = this) {
        const xCoord = node.#coordinate[0];
        const yCoord = node.#coordinate[1];
        const flower = {
            xmTwo_ymOne: [xCoord-2, yCoord-1],
            xmTwo_ypOne: [xCoord-2, yCoord+1],
            xpTwo_ymOne: [xCoord+2, yCoord-1],
            xpTwo_ypOne: [xCoord+2, yCoord+1],

            xmOne_ymTwo: [xCoord-1, yCoord-2],
            xpOne_ymTwo: [xCoord+1, yCoord-2],
            xmOne_ypTwo: [xCoord-1, yCoord+2],
            xpOne_ypTwo: [xCoord+1, yCoord+2],
        };

        return Object.values(flower).filter(coordinate => {
            if(coordinate[0] <= 8 && coordinate[0] > 0 &&
               coordinate[1] <= 8 && coordinate[1] > 0) {
                return this.#joinCoords(coordinate);
            }
        }); // this filters the legal moves into an array
    };

    #splitCoords(coordinate) {
        let firstCoord = coordinate[0];
        if(this.#cipher[firstCoord]) firstCoord = this.#cipher[firstCoord];
        const secondCoord = coordinate[1];
        return [parseInt(firstCoord), secondCoord];
    };

    #joinCoords(array) {
        let string = "";
        for(const key in this.#cipher) {
            if(this.#cipher[key] === array[0]) {
                string += key;
            }
        }
        return string+array[1];
    };

};

const node = new Node([7,3]);

console.log(node.edges);