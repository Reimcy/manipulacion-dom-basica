// 2da parte
var nombre='Reinaldo'
var apellido='Trocel'
var nombreUsuarioPlatzi='Johxander'
var edad=24
var correoElectronico='johxandertrocel11@gmail.com'
var mayorEdad=true
var dineroAhorrado=1000
var deudas=300

var dineroReal= dineroAhorrado - deudas
console.log (nombre + ' '+ apellido)
console.log(dineroReal)

// 3era parte

function apodos(name,lastname,nickname){
    let completeName= name + " "+ lastname
    return ('Mi nombre es ' + completeName + ', pero prefiero que me digas '+ nickname)
}

apodos("Juan David","Castro Gallego","juandc")

//condicionales
var tipoDeSuscripcion = 'Basic'
if (tipoDeSuscripcion==='Free'){
    console.log("Solo  puedes tomar los cursos gratis")
} else if (tipoDeSuscripcion==='Basic'){
    console.log("Puedes tomar casi todos los cursos de platzi durante un mes")
}else if(tipoDeSuscripcion==='Expert'){
    console.log("Puedes tomar casi todos los  cursos de platzi durante un anno")
}else if(tipoDeSuscripcion==='ExpertPlus'){
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un anno")
}

var tipoDeSuscripcion = 'Basic'
if (tipoDeSuscripcion==='Free'){
    console.log("Solo  puedes tomar los cursos gratis")
}
if (tipoDeSuscripcion==='Basic'){
    console.log("Puedes tomar casi todos los cursos de platzi durante un mes")
}
if(tipoDeSuscripcion==='Expert'){
    console.log("Puedes tomar casi todos los  cursos de platzi durante un anno")
}
if(tipoDeSuscripcion==='ExpertPlus'){
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un anno")
}

//ciclos
var i=0
while(i<5){
    console.log("El vaor de i es: " + i)
    i++
} 
var j=10
while (j>=2){
    console.log("El valor de j es: " +j)
    j--
}
 
var sum=Number(prompt("cuanto es 2 + 2?"))
if (sum===4){
    console.log("Felicitaciones")
}else{
    while (sum!=4){
        sum=Number(prompt("Es erroneo, introduzca otro resultado"))
        console.log("Ahora si acerto, Felicitaciones")
    }
}

// arrays e objects
var numeros=[0,2,4,6,8]
function operArreglos(numero){
    console.log(numero[0])
}

operArreglos(numeros)
/*function recorArreglos(numero){
    for (var i=0; i<=numero.lenght; i++){
        console.log("hola numero: "+ numero[i])
    }
}
recorArreglos(numeros2)*/

var numeros2=[0,1,3,5,7,9]
function presentNum(numero){
    console.log(numero)
}

for(var i=0;i<=numeros2.length;i++){
    presentNum(numeros2[i])
}

var bicicleta={
    Marca:"haro",
    Color:"Rojo",
    Rin:20,
    Tipo:"BMX",
}
function cararteristicas(vehiculo){
    for (let propi in vehiculo){
        console.log(vehiculo[propi])
    }

}

caracteristicas(bicicleta)

// un ejemplo de condicional reducidos
function conseguirSuscripcion(suscripcion){
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripcion[suscripcion])
        return;
    }
    console.warn('Ese tipo de suscripcion no existe')
}
