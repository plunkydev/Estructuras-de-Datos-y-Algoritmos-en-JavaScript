// Desafío BST (Binary Search Tree)

// Métodos a implementar:
// 1. insert(value)[X]
// 2. delete(value)
// 3. find(value)[X]
// 4. inOrderTraversal()

// Números a insertar en este orden:
// [15, 10, 20, 8, 12, 17, 25, 19]

// Pasos del desafío:

// 1. Inserta los números del array en el árbol.

// 2. Haz un recorrido in-order y muestra el resultado por consola.
//    Resultado esperado:
//    8 10 12 15 17 19 20 25

// 3. Busca los números 19 y 30.
//    find(19) => true
//    find(30) => false

// 4. Elimina los siguientes números (en este orden):
//    - 8  -> caso 1 (hoja)
//    - 17 -> caso 2 (un hijo)
//    - 15 -> caso 3 (dos hijos)

// 5. Haz un recorrido in-order nuevamente y muestra el resultado final.
//    Resultado esperado:
//    10 12 19 20 25

// Árbol inicial:
//         15
//        /  \
//      10    20
//     /  \   / \
//    8   12 17 25
//             \
//             19

// Árbol después de eliminar:
//         19
//        /  \
//      10    20
//        \     \
//        12    25

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    #respaldo = null;
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.#insertAux(this.root, value)
        this.#respaldo = this.inOrderTraversal()
    }

    #insertAux(node, value) {
        if(node === null) {
            console.log(`Insertando nodo ${value}`)
            return new TreeNode(value)
        }
        if(value < node.value) {
            console.log(`Buscando en el arbol izquierdo`);
            node.left = this.#insertAux(node.left, value)
        } else if(value > node.value) {
            console.log(`Buscando en el arbol derecho`);
            node.right = this.#insertAux(node.right, value)
        } else {
            console.log(`El Valor ${value} es un Duplicado`)
            return node
        }
        
        return node
    }

    delete(value) {
        this.root = this.#deleteAux(this.root, value)
        this.#respaldo = this.inOrderTraversal()
    }

    #deleteAux(node, value) {
        if(node === null) return null;
        console.log(node.value)
        if(value === node.value) {
            console.log(node)
            console.log(node.left === null && node.right === null)
            if(node.left === null && node.right === null) {
                console.log(node)
                return null
            } else if(node.left && node.right === null) {
                console.log(node)
                node = node.left;
                console.log(`Nodo ${value} borrado, el nodo ${node.value} tomo su lugar`)
                return node
            } else if(node.left === null && node.right) {
                console.log(node)
                node = node.right;
                console.log(`Nodo ${value} borrado, el nodo ${node.value} tomo su lugar`)
                return node
            } else {
                console.log(node)
                let minNodeValue = (node) => {
                    let current = node.left
                    while (current.left) {
                        current = current.left
                    }
                    return current
                }
                let sucesor = minNodeValue(node.right)
                console.log(sucesor)
                node.value = sucesor.value;
                node.right = this.#deleteAux(node.right, sucesor.value);
                console.log(`El valor del Nodo ${value} fue remplazado por el valor del nodo ${sucesor.value}, donde estaba el nodo ${sucesor.value} sera borrado o remplazado por uno de sus hijos`)
            }
        } else if(value < node.value) {
            console.log('Buscando en la rama izquierda el nodo a borrar');
            node.left = this.#deleteAux(node.left, value)
        } else if(value > node.value) {
            console.log('Buscando en la rama derecha el nodo a borrar');
            node.right = this.#deleteAux(node.right, value)
        }
        return node
    }

    find(value, node = this.root) {
        if(node === null) return false;
        if(value === node.value) return true
        if (value < node.value) {
            return this.find(value, node.left)
        } else if(value > node.value) {
            return this.find(value, node.right)
        }
        return node
    }

/*  findNode(value, node = this.root) {
        if(node === null) return false;
        if(value === node.value) return node
        if (value < node.value) {
            return this.findNode(value, node.left)
        } else if(value > node.value) {
            return this.findNode(value, node.right)
        }
        return node
    } */

    inOrderTraversal(node = this.root, array = []) {
        if(node === null) return array
        this.inOrderTraversal(node.left, array);
        array.push(node.value)
        this.inOrderTraversal(node.right, array)
        return array
    }

    buildBalancedBSTarray() {
        if(this.root === null) return 'El arbol esta vacio'
        let array = this.#respaldo;
        this.resetBST()
        const buildRec = (arr) => {
            if (arr.length === 0) return null;

            const mid = Math.floor(arr.length / 2);
            const node = new TreeNode(arr[mid]);

            node.left = buildRec(arr.slice(0, mid));
            node.right = buildRec(arr.slice(mid + 1));

            return node;
        }
        
        this.root = buildRec(array);
    }

    resetBST() {
        return this.root = null;
    }

}

const tree = new BinaryTree()
let arrNumber = [1, 2, 3, 4, 5, 6, 7];
arrNumber.forEach(element => {
    tree.insert(element)
});
//tree.inOrderTraversal()
//console.log(tree.find(19))
//console.log(tree.find(30))
/* console.log(tree.delete(8))
console.log(tree.delete(17))
console.log(tree.delete(10)) */
console.log(tree.root)
console.log(tree.inOrderTraversal())
console.log(tree.buildBalancedBSTarray())
console.log(tree.root)

