import { splitCoords, joinCoords } from "./coords.js";

export default class Node {
    #coordinate // the internal coordinate represented as [intX, intY]
    constructor(coordinate) { 
        this.#coordinate = splitCoords(coordinate);
        this.edges = this.findEdges();
    };

    get coordinate() { // the external coordinate, in chess notation
        return joinCoords(this.#coordinate);
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

        const arrayOfMoves = Object.values(flower).filter((coordinate) => {
            if(coordinate[0] <= 8 && coordinate[0] > 0 &&
               coordinate[1] <= 8 && coordinate[1] > 0) { return coordinate; }
        }).map((element) => joinCoords(element)); // this filters the legal moves into an array of chess notation

        return arrayOfMoves;
    };
};