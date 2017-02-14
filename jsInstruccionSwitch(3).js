function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
	case "Febrero":
	alert("este mes no tiene mas de 29 dias");
	break;

	default:
	alert("este mes tiene 30o mas dias");
}


//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN