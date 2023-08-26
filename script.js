//es una funcion para seleccionar una etiqueta de html
/*const h1= document.querySelector('h1');
const p= document.querySelector('p');
const parrafito= document.querySelector('.parrafito');
const pid= document.querySelector('#pid');
let input = document.querySelector('input');*/

/*console.log(h1)
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'patito <br> feo'//incluso podemos escribir codigo html
h1.innerText = 'patito <br> feo'//solo colocamos texto
/*h1.getAttribute('pantalla')//nos ayuda a leer los atributos que tengan nuestros elementos
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('class', 'rojo')// para cambiar los atributos, (propiedad, atributo)*/

/* h1.classList.add('rojo');
h1.classList.remove('verde')
//h1.classList.toggle('verde')
//h1.classList.contains('verde');

//input.value= "456" (accedemos a la propiedad directamente)

console.log(document.createElement('img'));// se crea una nueva etiqueta o elemento HTML
const img = document.createElement('img')
img.setAttribute('src','./img/pexels-emmanuel-codden-16991419.jpg')
console.log(img)

pid.innerHTML = ""// una manera de eliminar el contenido de texto y solo anexarle la imagen
pid.append(img)*/

const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

/*btn.addEventListener('click',btnOnclick)//cuando se llama una funcion no es necesario colocar los ()*/

form.addEventListener('submit', btnOnclick);

function btnOnclick({event}){
   // console.log({event});
    event.preventDefault(); //se llama para que no ejecute,lo que por defecto realiza el evento
    const sumaImputs= input1.value + input2.value;
    pResult.innerText = "Resultado:" + sumaImputs;
}
/** Los form siempre asumen que el ultimo btn que este en el sea de tipo submmit por ende reinicia la pagina */