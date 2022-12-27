
function menuPrincipal() {
    let total = 0
    let menu
    do {
        menu = prompt("1-Compre una nueva protesis \n2-Cerrar cuenta \n3-Salir")
        menu = parseInt(menu)
        switch (menu) {
            case 1: total = total + comprarProtesis()
                break
            case 2: alert("el total acumuladoo " + total)
                total = 0
                break
            case 3: alert("saliendo")
                break
            default: alert("opcion invalida")
        }
    } while (menu != 3)
}


function comprarProtesis() {
    let acumulador = 0
    alert("SELECCIONE LAS OPCIONES PARA GENERAR SU PRESUPUESTO")

    let tipo = prompt("1-Removible \n 2-Fija")
    tipo = parseInt(tipo)

    switch (tipo) {
        case 1: acumulador = 5000
            break
        case 2: acumulador = 9000
            break
        default: alert("opcion invalida")
    }

    let tipoDiente = prompt("1-Diente economico \n 2-Diente calidad media \n 3-Diente calidad alta ")
    tipoDiente = parseInt(tipoDiente)
    switch (tipoDiente) {
        case 1: acumulador = acumulador + 1000
            break
        case 2: acumulador = acumulador + 2000
            break
        case 3: acumulador = acumulador + 3000
            break
        default: alert("opcion invalida")
    }

    let velocidad = prompt("1-Comun 15 a 21 dias demora \n 2-Express 7 dias demora")
    velocidad = parseInt(velocidad)
    switch (velocidad) {
        case 1: acumulador = acumulador + 1000
            break
        case 2: acumulador = acumulador + 3000
            break
        default: alert("opcion invalida")
    }
    return acumulador
}

menuPrincipal()

// if (tipo==1) {acumulador = acumulador + 5000}
// else (tipo==2) {acumulador = acumulador + 9000}

// const presupuesto = function (a, b, c) { return a + b + c }
// console.log(presupuesto(tipo, tipoDiente, calidadMaterial))