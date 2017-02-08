/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var precio;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);
	precio=preciouno+preciodos+preciotres;

	alert("el precio es "+precio);
	
}
function Promedio () 
{

}
function PrecioFinal () 
{
	var preciouno;
	var preciodos;
	var preciotres;
	var subtotal;
	var iva;
	var precio;

	preciouno=document.getElementById('PrecioUno').value;
	preciodos=document.getElementById('PrecioDos').value;
	preciotres=document.getElementById('PrecioTres').value;

	preciouno=parseInt(preciouno);
	preciodos=parseInt(preciodos);
	preciotres=parseInt(preciotres);
	subtotal=preciouno+preciodos+preciotres;
	iva=subtotal*21/100;
	precio=subtotal+IVA;

	alert("el precio es "+precio);



}