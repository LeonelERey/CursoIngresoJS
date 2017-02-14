function Mostrar()
{
//tomo la edad  
var mesDelAño;
mesDelAño= document.getElementById('mes').value;

switch(mesDelAño) //no lleva (;)
{
	case"Enero": //debe ir con (:) si o si para q funcine
	alert("que comiences bien el año");
	break; //se bebe cerrar con (;) si o si para q funcione

	case"Marzo":
	alert("a clases!!!");
	break;

	case"Julio":
	alert("se vienen las vacociones!!!");
	break;

	case"Diciembre":
	alert("felices fiestas!!!");

}





}//FIN DE LA FUNCIÓN