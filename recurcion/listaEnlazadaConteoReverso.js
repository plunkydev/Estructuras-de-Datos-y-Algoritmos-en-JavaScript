class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = newNode
    }
}

const list1 = new LinkedList()
list1.append('A')
list1.append('B')
list1.append('C')
//list1.append('D')

function contarNodos(lista, count = 0) {
    //creo el caso base, dedusco que si lista = null, termina retronara algo, pero que quiero que retorne?
    //Pues el conteo hasta donde llego, pero no tengo contador, asi que lo creare como argumento y lo ire incrementando.
    //creare dos condicones bases
    //si lista.head es null, quiere decir que no hay nada en la lista
    if(lista.head === null) return count
    //si lista. tiene mas de un nodo incremento count segun se va recorriendo o profundisando
    count++
    //crea una variable llamada current para guardar el nodo actual
    let current;
    //aca pregunto si lista tiene la propiedad next. Porque sin lo la tiene, no se va a poder acceder al next
    if(lista.hasOwnProperty('next')) {
        //si la tiene, la guardo en current porque ya seria una segunda llamada y sabre que no estoy en head y tengo que acceder al next
        current = lista
    } else {
        //si no la tiene, la guardo en current en la primera llamada
        current = lista.head
    }
    //creo la segunda condicion base estando seguro que estoy en el objeto que tiene la propiedad next
    //Y ahora si puedo hacer la comparacion para mas de un elemento en la lista.
    //si current.next es null, quiere decir que estoy en el ultimo nodo
    if(current.next === null) return count
    //si no es null, quiere decir que no estoy en el ultimo nodo y paso a la siguiente llamada
    return contarNodos(current.next, count)
}
//console.log(list1.head)

function reverseList(current, next = null, prev = null) {
    if(current === null) {
        current = prev
        return current
    }
    next = current.next
    current.next = prev
    prev = current
    current = next
    return reverseList(current, next, prev)
}

//console.log(reverseList(list1.head))
//console.log(contarNodos(list1))

//mostrar los valores en la lista
//devolvere un array para visualizacion por el momento
function mostrarValores(lista, arr = []) {
    if(lista === null) return arr
    arr.push(lista.value)
    return mostrarValores(lista.next, arr)
}

//console.log(mostrarValores(list1.head))

//insertar un nodo x despues del nodo que tiene el valor pasado a la funcion.
function incertarEn(lista, valor, newValue) {
    if(lista === null) return null
    if(lista.value === valor) {
        let temp = lista.next
        const newNode = new Node(newValue)
        newNode.next = temp
        lista.next = newNode
        return mostrarValores(list1.head)//(Opcional) solo para retornar algo, y estar seguro que hubo incercion
    }
    return incertarEn(lista.next, valor, newValue)
}

//console.log(incertarEn(list1.head, 'B', 'X'))

//eliminar un nodo, dedusco que es el nodo segun el valor pasado en la funcion.
function removeNodo(lista, nodo, prev = null) {
    if(lista === null) return null
    if(lista.value === nodo && prev === null) {
        let removed = lista.value
        list1.head = lista.next
        console.log(lista)
        return removed
    }
    if (lista.value === nodo) {
        prev.next = lista.next
        return lista.value
    }
    prev = lista
    return removeNodo(lista.next, nodo, prev)
}

console.log(removeNodo(list1.head, 'A'))
console.log(list1.head)