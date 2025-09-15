class CategoryNode {
    constructor(category) {
        this.category = category;
        this.leftSubCategory = null;
        this.rightSubCategory = null;
    }
}

class CategoryList {
    #incertAuxiliar = (node, nombre) => {
        if(node === null) return new CategoryNode(nombre)
        if (nombre.charCodeAt(0) < node.category.charCodeAt(0)) {
            node.leftSubCategory = this.#incertAuxiliar(node.leftSubCategory, nombre)
        } else {
            node.rightSubCategory = this.#incertAuxiliar(node.rightSubCategory, nombre)
        }
        return node
    }
    constructor() {
        this.categoryRoot = null;
    }

    addCategory(nombre) {
        this.categoryRoot = this.#incertAuxiliar(this.categoryRoot, nombre)
    }

//Implementacion de la recorrido binaria tree in-order
    listCategoriesInOrder(node = this.categoryRoot, result = []) {
        if(node === null) return
        this.listCategoriesInOrder(node.leftSubCategory, result)
        result.push(node.category)
        this.listCategoriesInOrder(node.rightSubCategory, result)
        return result
    }

//Implementacion de la recorrido binaria tree pre-order
    listCategoriesPreOrder(node = this.categoryRoot, result = []) {
        if(node === null) return
        result.push(node.category)
        this.listCategoriesPreOrder(node.leftSubCategory, result)
        this.listCategoriesPreOrder(node.rightSubCategory, result)
        return result
    }
//Implementacion de la busqueda binaria in-order
    getCategorySearchInOrder(category, node = this.categoryRoot) {
        if (node === null) return null
        
        const left = this.getCategorySearchInOrder(category, node.leftSubCategory)
        if (left) {
            return left
            }
            if (node.category === category) {
                return node
            }
        const right = this.getCategorySearchInOrder(category, node.rightSubCategory)
        if (right) {
            return right
        }
        return false
    }
//Implementacion de la recorrido binaria tree post-order
    listCategoriesPostOrder(node = this.categoryRoot, result = []) {
        if(node === null) return result;
        this.listCategoriesPostOrder(node.leftSubCategory, result)
        this.listCategoriesPostOrder(node.rightSubCategory, result)
        result.push(node.category)
        return result
    }
}

/* const categories = [
    "Ropa",
    "Electrodomésticos",
    "Juguetes",
    "Alimentos",
    "Libros",
    "Bebés",
    "Deportes",
    "Tecnología",
    "Mascotas",
    "Muebles"
]; */

//const producto = new CategoryList()

/* for (let i = 0; i < categories.length; i++) {
    producto.addCategory(categories[i])
} */

//console.log(producto.getCategorySearchInOrder('Bebés'))

const modulos = new CategoryList()
modulos.addCategory('F')
modulos.addCategory('A')
modulos.addCategory('B')
modulos.addCategory('C')
modulos.addCategory('D')
modulos.addCategory('E')
modulos.addCategory('G')
modulos.addCategory('H')
modulos.addCategory('I')


console.log(modulos.listCategoriesInOrder())//[A, B, C, D, E, F, G, H, I]
console.log(modulos.listCategoriesPreOrder())//[F, A, B, C, D, E, G, H, I]
console.log(modulos.listCategoriesPostOrder())//[E, C, D, A, B, H, I, G, F] 
//console.log(producto.categoryRoot)