export default class Node {
    #coordinate // the internal coordinate represented as [x,y]
    constructor(coordinate) { // constructor accepts chess notation
        this.#coordinate = this.#splitCoords(coordinate);
    };

    #splitCoords(coordinate) {
        let firstCoord = coordinate[0];
        if(cipher[firstCoord]) firstCoord = cipher[firstCoord];
        let secondCoord = parseInt(coordinate[1]);
        return [firstCoord, secondCoord];
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

    get coordinate() { // the external coordinate, in chess notation
        return this.#joinCoords(this.#coordinate);
    }
};

const cipher = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };


const node = new Node([1,2]);
const node2 = new Node("b4");

console.log(node.coordinate);
console.log(node2.coordinate);