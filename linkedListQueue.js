class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(!this.front) {
            this.front = newNode
            this.rear = newNode
            this.size++;
            return
        }
        this.rear.next = newNode
        this.rear = newNode
        this.size++
    }

    dequeue() {
        if(!this.front) return null
        let dequeued = undefined;
        if (this.size === 1) {
            dequeued = this.front.data
            this.front = null
            this.rear = null
            this.size--
            return dequeued
        }
        dequeued = this.front.data
        this.front = this.front.next
        this.size--
        return dequeued
    }
    print() {
        if(!this.front) return null
        let result = []
        let current = this.front
        while(current !== null) {
            result.push(current.data)
            current = current.next
        }
        return result
    }
}

const colaDelBanco = new Queue(); //Cola de atencion del banco
console.log(colaDelBanco.print())  //A las 8am no hay nadie en la cola
//8:10 am llega cuatro clientes
colaDelBanco.enqueue('Ana')
colaDelBanco.enqueue('Luis')
colaDelBanco.enqueue('Maria')
colaDelBanco.enqueue('Juan')
//llaman a Ana y a Luis para ser atendidos
colaDelBanco.dequeue()
colaDelBanco.dequeue()
//A las 8:30 llegan dos clientes mas
colaDelBanco.enqueue('Elena')
colaDelBanco.enqueue('Carlos')
//Se atiende a un cliente mas que seria Maria
colaDelBanco.dequeue()
//En la cola quedan tres clientes, Juan, Elenea y Carlos
console.log(colaDelBanco.print())

//Si ago mas dequeue de los que hay en la cola no pasa nada ya que retornaria null por
//que no hay nadie en la cola y no se mstraria nada con print tampoco.
