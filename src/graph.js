import Node from "./node.js";

export default class AdjacencyGraph {
    #size
    #graph = {};
    constructor(size) {
        this.#size = size;
        this.#constructGraph();
    };

    find(value) {
        return this.#graph[value];
    };

    get report() {
        return this.#graph;
    }

    #constructGraph() {
        for(var x = 1; x <= this.#size; x++) {
            for(var y = 1; y <= this.#size; y++) {
                const node = new Node([x, y]);
                this.#graph[node.coordinate] = node;
            }
        }
    };
};

const graph = new AdjacencyGraph(8);

console.log(graph.report);