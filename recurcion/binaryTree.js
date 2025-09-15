class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    #incertRecursice = (node, value) => {
        if (node === null) {
            return new Node(value)
        }
        if (value < node.value) {
            node.left = this.#incertRecursice(node.left, value)
        } else {
            node.right = this.#incertRecursice(node.right, value)
        }
        return node
    }
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.#incertRecursice(this.root, value)
    }

    inOrder(node) {
        if(node === null) return
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
        return node.value
    }
}

const arrayNodes = [7, 4, 9, 2, 5, 8, 11]
const root = new BinarySearchTree()

for (let i = 0; i < arrayNodes.length; i++) {
    root.insert(arrayNodes[i])
}

root.inOrder(root.root)

console.log(root.root)

