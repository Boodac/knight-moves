export default class Node {
    #coordinate // the internal coordinate represented as [intX, intY]
    constructor(coordinate) { 
        this.#coordinate = this.#splitCoords(coordinate);
    };

    get coordinate() { // the external coordinate, in chess notation
        return this.#joinCoords(this.#coordinate);
    };

    findEdges(node = this) {
        let xCoord = node.#coordinate[0];
        let yCoord = node.#coordinate[1];

        /*

        assume e4 = 5, 4;
        edges:
            g3 = 7, 3
            g5 = 7, 5
            f6 = 6, 6
            f2 = 6, 2
            d6 = 4, 6
            d2 = 4, 2
            c3 = 3, 3
            c5 = 5, 5

        therefore we have sets of: 

        xCoords: [3 - 7]
        yCoords: [2 - 6]
        so two sets of X-2, X-1, X+2, X+1
        and Y-2, Y-1, Y+2, Y+1

        if x or y < 0 or > 8, return false;

        */
    }

    #splitCoords(coordinate) {
        let firstCoord = coordinate[0];
        if(cipher[firstCoord]) firstCoord = cipher[firstCoord];
        let secondCoord = parseInt(coordinate[1]);
        return [parseInt(firstCoord), secondCoord];
    };

    #joinCoords(array) {
        let string = "";
        for(const key in cipher) {
            if(cipher[key] === array[0]) {
                string += key;
            }
        }
        return string+array[1];
    };

};

const cipher = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };


const node = new Node([1,2]);
const node2 = new Node("b4");

console.log(node.coordinate);
console.log(node2.coordinate);