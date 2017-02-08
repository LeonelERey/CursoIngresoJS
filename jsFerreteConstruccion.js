/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro
	var metrosdealambre;


	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	perimetro=largo+ancho;
	metrosdealambre=perimetro*2*3;

	alert("nesecitara "+metrosdealambre+" metros de alambre para dar tres vueltas al Rectangulo");


}
function Circulo () 
{
	var radio;
	var perimetro;

	radio=document.getElementById('Radio').value;
	perimetro=2*3.14*radio*3;

	alert("nesecitara "+perimetro+" metros de alambre para dar tres vueltas al perimetro");

}
function Materiales () 
{
	var largo;
	var ancho;
	var cal;
	var cemento;
	var cantidaddecal;
	var cantidaddecemento,

	cal=2
	cemento=3
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	cantidaddecal=cal*largo;
	cantidaddecemento=cemento*ancho;

	alert("nesecitara "+cantidaddecemento+" de cemento y "+cantidaddecal+" de cal, para este perimetro");


}