class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    print() {
        if (this.size === 0) return null;
        let result = '';
        let current = this.head;
        while (current !== null) {
            result += current.value + ' <=> ';
            current = current.next;
        }
        return result + 'null';
    }

    printReverse() {
        if (this.size === 0) return null;
        let result = '';
        let current = this.tail;
        while (current !== null) {
            result += current.value + ' <=> ';
            current = current.prev;
        }
        return result + 'null';
    }

    insertAt(index, value) {
        if (index < 0 || index > this.size) return null;
        if (index === 0) return this.prepend(value);
        if (index === this.size) return this.append(value);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        let newNode = new Node(value);
        newNode.prev = current;
        newNode.next = current.next;
        current.next = newNode;
        newNode.next.prev = newNode;
    }
}

const list = new DoublyLinkedList()
list.append('A')
list.append('B')
list.append('C')
console.log(list.print())
list.insertAt(2, 'X')
list.insertAt(1, 'M')
console.log(list.print())
console.log(list.printReverse())
console.log(list)