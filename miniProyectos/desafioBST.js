//Construir un BST en JavaScript desde cero
class Node {
        constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    #insertAuxiliar(node, value) {
        if(node === null) return new Node(value)
        if(node.value > value) {
            node.left = this.#insertAuxiliar(node.left, value)
        } else {
            node.right = this.#insertAuxiliar(node.right, value)
        }
        return node
    }
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.#insertAuxiliar(this.root, value)
    }

    search(value, node = this.root) {
        if(node === null) return false
        if(value === node.value) return true
        if(value < node.value) {
            return this.search(value, node.left)
        } else {
            return this.search(value, node.right)
        }
    }

}

const arbol = new BinarySearchTree();
arbol.insert(10);
arbol.insert(5);
arbol.insert(15);
arbol.insert(3);
arbol.insert(7);
arbol.insert(20);

console.log(arbol)
console.log(arbol.search(20))

console.log(JSON.stringify(arbol, null, 2));