class Node {
    constructor(nombre, tel) {
        this.nombre = nombre;
        this.tel = tel;
        this.left = null;
        this.right = null;
    }
}

class ContactList {
    #insertAux(node, nombre, tel) {
        if (node === null) {
            return new Node(nombre, tel);
        }
        if (nombre.localeCompare(node.nombre) < 0) {
            node.left = this.#insertAux(node.left, nombre, tel);
        } else {
            node.right = this.#insertAux(node.right, nombre, tel);
        }
        return node;
    }
    constructor() {
        this.root = null;
    }

    insertarContacto(nombre, tel) {
        this.root = this.#insertAux(this.root, nombre, tel)
    }

    buscarContacto(nombre, node = this.root) {
        if(node === null) return null
        if (nombre === node.nombre) {
            return {
                Nombre: node.nombre,
                Tell: node.tel
            };
        };
        if(nombre.localeCompare(node.nombre) < 0) {
            return this.buscarContacto(nombre, node.left);
        } else {
            return this.buscarContacto(nombre, node.right);
        };
    }
    #findNodeAndParent(nombre, node = this.root, parent = null) {
    if (node === null) return { node: null, parent: null };

    if (nombre === node.nombre) {
        return { node, parent };
    }

    if (nombre.localeCompare(node.nombre) < 0) {
        return this.#findNodeAndParent(nombre, node.left, node);
    } else {
        return this.#findNodeAndParent(nombre, node.right, node);
    }
}

    mostrarEnOrden(node = this.root, array = []) {
        if(node === null) return array;
        this.mostrarEnOrden(node.left, array);
        array.push(node.nombre)
        this.mostrarEnOrden(node.right, array);
        return array;
    }

    removeNode(contact) {
        console.log(contact)
        let family = this.#findNodeAndParent(contact);
        let removedNode = null;
        if(family.node === null) return `${contact} no se encuentra`;
        if(family.node.left === null && family.node.right === null) {
            if(family.parent === null) return this.root = null;
            removedNode = this.#removeLeaf(family.parent, family.node);
            return removedNode;
        }
        if(family.node.left && family.node.right === null){
            removedNode = this.#removeWithOneChild(family.parent, family.node);
            return removedNode
        }
        if(family.node.right && family.node.left === null){
            removedNode = this.#removeWithOneChild(family.parent, family.node);
            return removedNode
        }

        if(family.node.left && family.node.right) {
            removedNode = this.#toPlainObject(family.node)
            let sucesor = this.#findMinNodeWithParent(family.node)
            console.log(sucesor)
            family.node.nombre = sucesor.minNode.nombre;
            family.node.tel = sucesor.minNode.tel;
            console.log(family)
            console.log(sucesor)
            if(sucesor.parent.left === sucesor.minNode) {
                sucesor.parent.left = sucesor.minNode.right;
            } else {
                sucesor.parent.right = sucesor.minNode.right;
            }
            return removedNode
        }
    }
    #removeLeaf(parent, node) {
        if (parent.left === node) {
            parent.left = null;
        } else if (parent.right === node) {
            parent.right = null;
        }
        return this.#toPlainObject(node);
    }

    #removeWithOneChild(parent, node){
        let child = node.left || node.right;
        if (parent.left === node) {
            parent.left = child;
            return this.#toPlainObject(node)
        } else {
            parent.right = child;
            return this.#toPlainObject(node)
        }
    }
    #toPlainObject(node) {
    return {
        nombre: node.nombre,
        tel: node.tel
    };
    }

    #findMinNodeWithParent(node) {
    let parent = node;
    let current = node.right;

    while (current.left !== null) {
        parent = current;
        current = current.left;
    }

    return { minNode: current, parent };
}
}

const agenda = new ContactList();
agenda.insertarContacto("Carlos", "3512345678"); 
agenda.insertarContacto("An", "351156751");
agenda.insertarContacto("Ana", "3511111111"); 
agenda.insertarContacto("Amalia", "3512223445"); 
agenda.insertarContacto("Luis", "3519999999");     
agenda.insertarContacto("Lucas", "3517777777"); 

console.log(agenda.mostrarEnOrden())

console.log(agenda.root)
console.log(agenda.removeNode('An'))
//console.log(agenda.minNode())
console.log(agenda.root)