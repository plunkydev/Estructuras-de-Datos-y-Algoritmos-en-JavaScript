/* class Graph {
    constructor() {
        this.adjacencyList = {}; // Aquí almacenamos las aristas
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []; // Inicializamos la lista de adyacencia para este vértice
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2); // Grafo dirigido
    }

    // BFS: Breadth-First Search (Búsqueda en anchura)
    // Recorre el grafo por niveles. Explora todos los vecinos de un nodo antes de pasar al siguiente nivel.
    bfs(start) {
        const queue = [start];
        const visited = new Set();

        console.log("Recorrido BFS (Breadth-First Search / Búsqueda en anchura):");
        while (queue.length > 0) {
            const current = queue.shift();

            if (!visited.has(current)) {
                console.log(current);
                visited.add(current);
                this.adjacencyList[current].forEach(neighbor => {
                    queue.push(neighbor);
                });
            }
        }
    }

    // DFS: Depth-First Search (Búsqueda en profundidad)
    // Recorre el grafo metiéndose lo más profundo posible antes de retroceder.
    dfs(start, visited = new Set()) {
        if (visited.has(start)) return; // Caso base: ya visitado

        console.log(start);
        visited.add(start);

        this.adjacencyList[start].forEach(neighbor => {
            this.dfs(neighbor, visited); // Llamada recursiva a los vecinos
        });
    }
}
 */
// Ejemplo de uso
/* El grafo esta compuesto de vertices y aristas 
Creare una clase para representarlo*/

class Nodo {
    constructor(value) {
        this.vertice = value;
        this.aristaList = [];
    }
    addArista(arista) {
        this.aristaList.push(arista)
    }
}

class Graph {
    constructor() {
        this.nodes = new Map()
    }

    addNode(value) {
        this.nodes.set(value, new Nodo(value))
    }

    addEdged(startNode, endNode) {
        const vertice = this.nodes.get(startNode);
        vertice.addArista(endNode)
    }

    /* dfs(start, visited = new Set()) {
        if(visited.has(start)) return;
        const current = this.nodes.get(start)
        console.log(current.vertice)
        visited.add(start)
        current.aristaList.forEach(arista => {
            this.dfs(arista, visited)
        })
    } */

    dfsInteractive(start) {
        const stack = [start];
        const visited = new Set();
        while (stack.length > 0) {
            let currentVisited = stack.pop()
            if (!visited.has(currentVisited)) {
                console.log(currentVisited)
                visited.add(currentVisited)
                const current = this.nodes.get(currentVisited);
                current.aristaList.reverse().forEach((elem) => stack.push(elem));
            }
        }
    }

        bfs(start) {
            const queue = [start]
            const visited = new Set()
            while (queue.length > 0) {
                const current = queue.shift();
                if (!visited.has(current)) {
                    console.log(current);
                    visited.add(current)
                    this.nodes.get(current).aristaList.forEach((elem) => {
                        queue.push(elem)
                    })
                }
            }
        }
}

const grafo = new Graph()
grafo.addNode('A')
grafo.addNode('B')
grafo.addNode('C')
grafo.addNode('D')
grafo.addNode('E')
grafo.addEdged('A', 'B')
grafo.addEdged('A', 'C')
grafo.addEdged('A', 'D')
grafo.addEdged('B', 'E')
grafo.addEdged('C', 'E')
grafo.addEdged('D', 'E')
console.log(grafo.dfsInteractive('A'))
console.log(grafo.bfs('A'))
console.log(grafo.nodes.get("B"))