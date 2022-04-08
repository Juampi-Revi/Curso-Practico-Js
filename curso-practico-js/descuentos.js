/*const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioFinal = (precioOriginal * porcentajePrecioConDescuento)/100;

console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioFinal,
});
*/
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioFinal = (precio * porcentajePrecioConDescuento)/100;
    return precioFinal;
}

function calculoPrecioConDescuento(){
    const inputPrecio = document.getElementById('inputPrice');
    const valuePrecio = inputPrecio.value;
    const inputDescuento = document.getElementById("inputDiscount");
    const valueDescuento = inputDescuento.value;

    const resulutP = document.getElementById("resultPrice");
    const precioConDescuento = calcularPrecioConDescuento(valuePrecio, valueDescuento);
    resulutP.innerText = "El precio final con descuento es $" + precioConDescuento;
}

//Cupones de descuentos 
/*const cupones = [
    "es_un_secreto",
    "no_le_digas_a_nadie",
    "puto_el_que_lee",
];
function calculoPrecioConDescuento2(){
    const inputCupon = document.getElementById("inputCupon");
    const valueCupon = inputCupon.value;
    const inputPrecio = document.getElementById("inputPrice2");
    const valuePrecio2 = inputPrecio.value;
    let descuento;
    switch(valueCupon){
        case cupones[0]:
            descuento = 15;
        break;
        case cupones[1]:
            descuento = 30;
        break;
        case cupones[2]:
            descuento = 25;
        break;
    }
    const precioFinalConDescuento = calcularPrecioConDescuento(valuePrecio2,descuento);
    const resultado = document.getElementById("resultPrice2");
    resultado.innerText = "El precio con descuento es de $" + precioFinalConDescuento;
};
*/
const cupones = [
    {   
        name : "es_un_secreto",
        descuento: 15,
    },
    {   
        name : "no_le_digas_a_nadie",
        descuento: 30,
    },
    {   
        name : "puto_el_que_lee",
        descuento: 25,
    },
];
function calculoPrecioConDescuento2(){
    const momo = document.getElementById("inputPrice2");
    const precioValues = momo.value;
    const lolo = document.getElementById("inputCupon");
    const couponValue = lolo.value;
    const isCouponValueValid = function (copones) {
        return copones.name === couponValue;
    };

    const userCoupon = cupones.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    } else {
        const descuentos = userCoupon.descuento;
        const precioConDescuentos = calcularPrecioConDescuento (precioValues, descuentos);

        const imprimir = document.getElementById("resultPrice2");
        imprimir.innerText = "El precio con el descuento es de $" +precioConDescuentos;
    }
}

function generarTabla(){
    const numerosTabla = document.getElementById("numeroTabla");
    const tablaValue = numerosTabla.value;
    const imprimir2 = document.getElementById("resultado");
    let multiplicar = 0;
    for (var i =0; i <= 10; i++ ){
        multiplicar = tablaValue * i;
        imprimir2.innerText = "Ver resultado en consola";
        console.log(tablaValue + " X " + i + " = " + multiplicar);
    }
}