const lista1 =[
    100,
    300,
    500,
    800000,
];
//calcular media arimetica de este array 


function calcularMediaAritmetica (lista){
    //let sumarlista = 0;
    //for (let i = 0; i < lista1.length; i++) {
    //    sumarlista = sumarlista + lista[i];
    //}
    const sumarlista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promediolista1 = sumarlista/ lista.length;
    return promediolista1;
}

/*const mitadLista1 = parseInt(lista1.length/2);
function esPar (numerito){
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    };
};
let mediana;
if (esPar(lista1.length)){
    const elemento1 = lista1 [mitadLista1 - 1];
    const elemento2 =lista1 [mitadLista1 ];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
};*/
const lista = [];
const itemArray = document.getElementById("list-element");
const promedioResultado = document.getElementById("");
const medianaResultado = document.getElementById("");
const compararNumeros = (a,b) => a - b;

let x;
let y; 
let sum = 0;
let total = 0;
let result;

function addElementArray(){
    x = perseInt(itemArray.value);
    lista.push(x);
    itemArray.value = null;
    return;
};
