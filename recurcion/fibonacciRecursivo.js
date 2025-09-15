/* function fibo(n, arr = [0, 1]) {
    if(n < 0) return 'No fibonacci secuencia'
    if(n === 0) return arr[arr.length - 1]
    arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return fibo(n - 1, arr)
}

console.log(fibo(6)) */
/* function fibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
} */

/* function fibo(n) {
  console.log("Calculando fibo de", n);
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}
console.log("Resultado:", fibo(5)); */
//console.log(fibo(6))

function sumarCont(n) {
    //caso base para que comiense a desapilar esperando el resultado de cada llamada
    if(n === 0) return 0
    //caso recursivo, comiensa a apilar desde la primera llamada
    //primera llamada n = 3 y se apila el resultado a esperar de 3 + el resultado de llamar sumarCont(n - 1) que creo debe ser 2
    //segunda llamada n = 2 y se apila el resultado a esperar de 2 + el resultado de llamar sumarCont(n - 1) que creo debe ser 1
    //tercera llamada n = 1 y se apila el resultado a esperar de 1 + el resultado de llamar sumarCont(n - 1) que creo debe ser 0
    //se hace una cuarta llamada n = 0 y se cumple el caso base y retorna 0
    //ahora va a retornar la suma de 0 + 1 = 1
    //ahora va a retornar la suma de 1 + 2 = 3
    //ahora va a retornar la suma de 3 + 3 = 6
    //NOTA: creo que hace dos pasos extras. sumar el retorno del caso base y sumar el retorno de la segunda llamada con el de la primera
    return n + sumarCont(n - 1)
}
console.log(sumarCont(3))