class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.#insertRecursively(this.root, value);
    }

    #insertRecursively(node, value) {
        if (node === null) {
            console.log(`Insertando nodo ${value}`);
            return new TreeNode(value);
        }

        if (value < node.value) {
            node.left = this.#insertRecursively(node.left, value);
        } else if (value > node.value) {
            node.right = this.#insertRecursively(node.right, value);
        } else {
            console.log(`Valor duplicado: ${value} (no se inserta)`);
        }

        return node;
    }

    delete(value) {
        console.log(`Iniciando eliminación de ${value}`);
        this.root = this.#deleteRecursively(this.root, value);
    }

    #deleteRecursively(node, value) {
        if (node === null) {
            console.log(`Valor ${value} no encontrado en el árbol.`);
            return null;
        }

        if (value < node.value) {
            console.log(`Buscando ${value} en la rama izquierda de ${node.value}`);
            node.left = this.#deleteRecursively(node.left, value);
        } else if (value > node.value) {
            console.log(`Buscando ${value} en la rama derecha de ${node.value}`);
            node.right = this.#deleteRecursively(node.right, value);
        } else {
            console.log(`Nodo encontrado: ${node.value}`);

            // Caso 1: Sin hijos
            if (node.left === null && node.right === null) {
                console.log(`El nodo ${node.value} es hoja. Se elimina.`);
                return null;
            }

            // Caso 2: Un solo hijo
            if (node.left === null) {
                console.log(`El nodo ${node.value} tiene solo hijo derecho.`);
                return node.right;
            }

            if (node.right === null) {
                console.log(`El nodo ${node.value} tiene solo hijo izquierdo.`);
                return node.left;
            }

            // Caso 3: Dos hijos
            console.log(`El nodo ${node.value} tiene dos hijos.`);

            const successorValue = this.#findMinValue(node.right);
            console.log(`Sucesor in-order de ${node.value} es ${successorValue}`);

            node.value = successorValue;

            console.log(`Reemplazando valor de ${value} por ${successorValue}`);
            node.right = this.#deleteRecursively(node.right, successorValue);
        }

        return node;
    }

    #findMinValue(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }
}

const tree = new BinarySearchTree();
[8,3,10,1,6,9,14].forEach(num => tree.insert(num));

tree.delete(10);
tree.delete(3);
tree.delete(1);
console.log(tree)

