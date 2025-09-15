class Queue {
    #reset = () => {
        if(this.size() === 0 && this.front > 10) {
            this.fila = [];
            this.front = 0;
        }
    }
    constructor() {
        this.fila = [];
        this.front = 0;
    }

    enqueue(value) {
        this.fila.push(value)
    }

    dequeue() {
        this.#reset()
        if(!this.size()) return null
        const dequeued = this.fila[this.front];
        this.fila[this.front] = null;
        this.front++
        this.#reset()
        return dequeued
    }
    size() {
        return this.fila.length - this.front
    }
}

function assert(desc, cond) {
  if (!cond) throw new Error("❌ " + desc);
  console.log("✅ " + desc);
}

const q = new Queue();

// 1) Enqueue básico
q.enqueue("A");
q.enqueue("B");
q.enqueue("C");
assert("size debe ser 3", q.size() === 3);

// 2) Dequeue respeta FIFO
assert("primer dequeue devuelve A", q.dequeue() === "A");
assert("segundo dequeue devuelve B", q.dequeue() === "B");

// 3) Mezcla enqueue + dequeue
q.enqueue("D");            // Cola ahora: C, D
assert("size debe ser 2", q.size() === 2);
assert("dequeue devuelve C", q.dequeue() === "C");
assert("dequeue devuelve D", q.dequeue() === "D");
assert("cola vacía devuelve null", q.dequeue() === null);

// 4) Stress de desplazamiento
for (let i = 0; i < 30; i++) q.enqueue(i);
for (let i = 0; i < 30; i++) q.dequeue();     // front sube a 30
assert("después de reset size es 0", q.size() === 0);
assert("front se reinicia a 0", q.front === 0);
console.log("🎉 Todas las pruebas pasaron");
