function sumarImpar(n, total = 0) {
    if (n < 1) return total;
    if(n % 2 === 1) {
        total += n;
    }
    return sumarImpar(n - 1, total);
}

console.log(sumarImpar(5))

function factorialRecursivo(n) {
    if (n < 1) return 1;
    return n * factorialRecursivo(n - 1);
}

console.log(factorialRecursivo(3))
