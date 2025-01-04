export default class Node {
    #coordinate
    constructor(coordinate) {
        this.#coordinate = this.#splitCoords(coordinate);
    };

    #splitCoords(coordinate) {
        let firstCoord;
        if(cipher.hasOwnProperty(coordinate[0])) {
            firstCoord = cipher[coordinate[0]];
        } else throw new Error("malformed coordinate");
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

    get coordinate() {
        return this.#joinCoords(this.#coordinate);
    }
};

const cipher = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };

const node = new Node("a2");

console.log(node.coordinate);