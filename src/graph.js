import Node from "./node.js";
import { joinCoords } from "./coords.js";

export default class AdjacencyGraph {
    #size
    #graph = {};
    constructor(size = 8) {
        this.#size = size;
        this.#constructGraph();
    };

    find(value) {
        if(value instanceof Array) value = joinCoords(value);
        return this.#graph[value];
    };

    #constructGraph() {
        for(var x = 1; x <= this.#size; x++) {
            for(var y = 1; y <= this.#size; y++) {
                const node = new Node([x, y]);
                this.#graph[node.coordinate] = node;
            }
        }
    };
};