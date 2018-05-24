var formulario = document.querySelector('form');
var resultado = document.querySelector('h2')
formulario.addEventListener('submit',function(e){
e.preventDefault();


var horastrabajo= formulario.HorasAtrabajar.value;
var disSem = formulario.DiasSemana.value;
var GastoVivi = formulario.GastoVivienda.value;
var GastoTel = formulario.GastosTelEint.value;
var GastoFood = formulario.GastosComida.value;
var Gastoscel = formulario.GastosCel.value;
var GastosTran =formulario.GastosTransporte.value;
var GastosEntre = formulario.GastosEntretenimiento.value;
var PorcentajeGan = formulario.PorcientoGanancia.value;
var PorcentajeJubi = formulario.PorcientoJubilacion.value;


var gastostotales = (horastrabajo + disSem);
console.log('Gastos mensuales', gastostotales)
resultado.innerHTML=gastostotales;
})