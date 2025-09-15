class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}


class Stack {
    #size;
    #top;
    constructor() {
        this.#top = null;
        this.#size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.#top;
        this.#top = newNode
        this.#size++
    }

    pop() {
        if(!this.#size) return null
        let nextNode = this.#top.next;
        let poppedValue = this.#top.data;
        this.#top = nextNode;
        this.#size--
        return poppedValue
    }

    peek() {
        if(!this.#top) return null
        return this.#top.data
    }

    size() {
        return this.#size
    }

    printAll() {
        let result = [];
        let current = this.#top;
        while (current) {
            result.push(current.data)
            current = current.next
        }
        return result
    }
}

class Navegador {
    constructor() {
        this.historial = new Stack();
        this.cerrados = new Stack();
    }

    irA(url) {
        this.historial.push(url);
        this.cerrados = new Stack();
    }

    volver() {
        const cerrado = this.historial.pop();
        if (!cerrado) return null; // evita pushear null
        this.cerrados.push(cerrado);
        return cerrado;
    }


    paginaActual() {
        return this.historial.peek()
    }

    mostrarHistorial() {
        return this.historial.printAll()
    }

    adelante() {
        if (this.cerrados.size() === 0) return null;
        const url = this.cerrados.pop();
        this.historial.push(url);
        return url;
    }
}


const nav = new Navegador();

nav.irA('https://www.google.com/')
nav.irA('https://github.com/plunkydev')
nav.irA('https://www.youtube.com/')
nav.volver()
//console.log(nav.adelante())

console.log(nav.mostrarHistorial())
console.log(nav.paginaActual())

nav