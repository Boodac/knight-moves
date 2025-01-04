import Node from "./node.js";
import Graph from "./graph.js";

function knightMoves(initialPosition, endPosition) {
    if(!endPosition) throw new Error("missing arguments at knightMoves()");
    const start = new Node(initialPosition);
    const end = new Node(endPosition);
    if(start.coordinate == end.coordinate) {
        console.log("It takes a minimum of 4 moves for a knight to return to its starting position.");
        console.log("This is a bit silly, but, if you insist, here is an example:");
        const firstMove = new Node(start.edges[0]);
        const secondMove = new Node(firstMove.edges.pop());
        console.log(`Starting Position: ${start.coordinate}`);
        console.log(`Move 1: ${firstMove.coordinate}`);
        console.log(`Move 2: ${secondMove.coordinate}`);
        console.log(`Move 3: ${firstMove.coordinate} - oh woooow we're just going baaaaack...`);
        console.log(`End on move 4: ${end.coordinate}`);
        return "... happy?";
    };
    const queue = [start];
    const result = [start.coordinate];
    const visited = new Set();

};