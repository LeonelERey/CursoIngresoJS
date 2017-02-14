function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Enero":
	case "febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "junio":
	alert("Falta para el invierno");
	break;
	
	case "Julio":
	case "Agosto":
	alert("Abrigate que hace frio.");
	break;

	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	alert("ya paso el frio, ahora calor!!!")
}





}//FIN DE LA FUNCIÓN