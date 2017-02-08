/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var precio;
	var resultado;

	precio=document.getElementById('importe').value;
	
	resultado=precio*0.75;

	document.getElementById('resultado').value=resultado;
}
