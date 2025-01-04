const cipher = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };

export function splitCoords(coordinate) { // return [x,y] from chess notation
    let firstCoord = coordinate[0];
    if(cipher[firstCoord]) firstCoord = cipher[firstCoord];
    const secondCoord = coordinate[1];
    return [parseInt(firstCoord), parseInt(secondCoord)];
};


export function joinCoords(array) { // return chess notation from array
    let string = "";
    for(const key in cipher) {
        if(cipher[key] === array[0]) {
            string += key;
        }
    }
    return string+array[1];
};