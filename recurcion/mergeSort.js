//primero creo la funcion merge que va a unir los arrays y retorna un array ordenado
function merge(arrL, arrR) {
    //creo un array vacio nonde se iran guardando los elementos ordenados
    let result = [];
    //mientras arrL y arrR tengan elementos ya que se van a comparar y el que sea menor se va a meter en result
    //cortandolo del array donde estaba, reduciondo su tamaño para poder a la condicion while
    while (arrL.length && arrR.length) {
        //se compara el primer elemento de cada array
        //si arrL es menor que arrR se va a meter el de arrL en result
        //si arrR es menor que arrL se va a meter el de arrR en result
        result.push(arrL[0] < arrR[0] ? arrL.shift() : arrR.shift());
    }
    //si arrL o arrR tienen elementos se van a meter en result
    //usando el operador spread
    return [...result, ...arrL, ...arrR];
}
//Ya que se que la funcion merge va a unir los arrays y retorna un array ordenado
//creo la funcion mergeSort
function mergeSort(arr) {
    //creo la condicion base
    //si arr.length es menor o igual a 1 se va a retornar arr
    //porque puede retornar un array con un solo elemento o un array vacio
    //que creo igualmente va a ser ordenado con la funcion merge
    if(arr.length <= 1) return arr
    //El array se va a cortar en la mitad mediante algun metodo que divida un numero a la 
    // mitad y redondea hacia abajo o hacia arriba
    let med = Math.floor(arr.length / 2)
    // Creamos una nueva variable llamada l y otra llamada r
    //l va a ser igual a la funcion mergeSort con el array cortado en la mitad, la primera mitad
    let l = mergeSort(arr.slice(0,med))
    //r va a ser igual a la funcion mergeSort con el array cortado en la mitad, la segunda mitad
    let r = mergeSort(arr.slice(med))
    //retorno la funcion merge con l y r
    return merge(l, r)
}

let array = [11, 8, 4, 5, 68, 200, 12]
console.log(mergeSort(array))