function reverseStr(str) {
    //Como el caso recursivo ira sacando una tajada del string, por eso llegara al caso en el string estara vacio, cumpliendo el caso base
    if(str === "") return ""
    //primera llamada str = David reverseStr(str.slice(1)) = avid + str[0] = D retorne avid + D
    //NOTA: slice cuenta desde el indice 1 en adelante, omitiendo el indice 0 y retornando str = avid, esto hace que valla reduciendo el string
    //segunda llamada str = avid reverseStr(str.slice(1)) = vid + str[0] = a retorne vid + a
    //tercera llamada str = vid reverseStr(str.slice(1)) = id + str[0] = v retorne id + v
    //cuarta llamada str = id reverseStr(str.slice(1)) = d + str[0] = v retorne d + i
    //cuarta llamada str = d reverseStr(str.slice(1)) = "" + str[0] = d retorne "" + d
    //NOTA: aqui no entiendo que hace slice, str no tiene un indice 1, porque taja desde el indice 1 y devuelve un string vacio?
    //quinta llamada str = "" se cumple el caso base retornando ""
    //Dsapilamiento
    //retorno reverseStr(str.slice(1)) = "" + str[0] = d retorne "" + d = d
    //NOTA no comprendo porque el retorno concatena
    //retorno reverseStr(str.slice(1)) = d + str[0] = v retorne d + i = di
    //retorno reverseStr(str.slice(1)) = id + str[0] = v retorne id + v = div
    //retorno reverseStr(str.slice(1)) = vid + str[0] = a retorne vid + a = diva
    //retorno reverseStr(str.slice(1)) = vid + str[0] = a retorne vid + a = diva
    //retorno reverseStr(str.slice(1)) = avid + str[0] = D retorne avid + D = divaD
    //Asta aqui llego mi comprencion
    return reverseStr(str.slice(1)) + str[0]
}

console.log(reverseStr("David"))