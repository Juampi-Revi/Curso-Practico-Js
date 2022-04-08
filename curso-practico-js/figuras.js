//Calculos cuadrado//
console.group("Cuadrados");
//const ladoCuadrado = 5 ;
//console.log("Los lados del cuadrado miden :" + ladoCuadrado + "cm"); 

//const perimetroCuadrado = ladoCuadrado * 4; 
//console.log("El perimetro del cuadrado es :" + perimetroCuadrado + "cm");
function perimetroCuadrado (lado){
    return lado *4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es :" + areaCuadrado + "cm^2");
function areaCuadrado (lado){
    return lado * lado;
}
console.groupEnd();

//Calculos triangulo//
/*console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triangulo miden " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
console.log("La altura de mi triangulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log ("El perimetro del triangulo es de " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2 ;
console.log ("El area del triangulo es de : " + areaTriangulo + " cm^2");
*/

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
    return (base * altura)/2;
}

console.groupEnd();

//Calculos circulo//
/*console.group("circulo");
const radioCirculo = 4;
console.log ("El radio de mi circulo es de : " + radioCirculo + " cm");
const diametroCirculo = radioCirculo * 2;
console.log ("El diametro de mi circulo es de : " + diametroCirculo);
//const pi = 3.1415;
const pi = Math.PI;

const perimetroCirculo = diametroCirculo *pi;
console.log ("El perimetro de nuestro circulo es de : " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log ("El area de nuestro circulo es de : " + areaCirculo + " cm^2");
*/
const pi =Math.PI;

function diametroCirculo (radio){
    return radio *2;
}
function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi; 
};
function areaCirculo (radio){
    return (radio * radio) * pi; 
}
console.groupEnd();

//funciones para nuestro HTML
function calcularPerimetroCuadrado(){
    const input =document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input =document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado (value);
    alert(area);
}
function calcularPerimetroTriangulo(){
    const input1 =document.getElementById("inputTriangulo1");
    const value1 = input1.value;
    const input2 =document.getElementById("inputTriangulo2");
    const value2 = input2.value;
    const input3 =document.getElementById("inputTriangulo3");
    const value3 = input3.value;
    const perimetro = perimetroTriangulo (value1, value2, value3);
    alert (perimetro);
}
function calcularAreaTriangulo(){
    const input =document.getElementById("inputTriangulo3");
    const value = input.value;
    const input1 =document.getElementById("inputTriangulo4");
    const value1 = input1.value;
    const areatriangulo = areaTriangulo (value, value1);
    alert (areatriangulo);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo (value);
    alert (perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo (value);
    alert (area); 
}

/*function alturaTrianguloIsoceles (a, b, base){
    if (a === b){
        var formula = (a*a - ((b*b)/4)); 
        var altura = Math.sqrt (formula);
        console.log(altura);
    } else {
        alert("el triangulo no es isoceles");
    };
};
*/
function alturaTrianguloIsoceles (a, b, base){
    if (a === b){
        var altura = Math.sqrt ((a*a - ((b*b)/4)));
        console.log(altura);
    } else {
        alert("el triangulo no es isoceles");
    };
};
