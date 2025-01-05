import Graph from "./graph.js";
import Node from "./node.js";

function knightMoves(initialPosition, endPosition) {
    if(!initialPosition || !endPosition) throw new Error("missing arguments at knightMoves()");
    const graph = new Graph();
    const start = graph.find(initialPosition);
    const end = graph.find(endPosition);
    const result = [];
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

    const traverse = (node, end) => {
        const result = [];
        const queue = [];
        queue.push([node, result]);
        const visited = new Set();

        while(queue.length) {
            const currentOp = queue.shift();
            let currentNode = currentOp[0];
            if(!(currentNode instanceof Node)) currentNode = graph.find(currentNode);
            const priorPath = currentOp[1];

            if(visited.has(currentNode)) continue;
            else visited.add(currentNode);

            if(currentNode === end) return priorPath.concat(end.coordinate);
            
            else {
                for(const coord of currentNode.edges) {
                    let node = graph.find(coord);
                    if(visited.has(node)) continue;
                    queue.push([node, priorPath.concat(currentNode.coordinate)]);
                }
            };
            
        };
    };

    return traverse(start, end);
};

const result = knightMoves([3,3],[4,3]);
console.log(`From ${result[0]} to ${result[result.length-1]} in ${result.length-1} moves`);
result.forEach(move => console.log(move));