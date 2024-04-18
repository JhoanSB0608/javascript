let lista = []
let badera = undefined

do {
    lista.push(Number(await prompt("Ingrese un numero: ")))
    badera = Number(await prompt("¿Deseas ingresar otro numero?"))
}while 