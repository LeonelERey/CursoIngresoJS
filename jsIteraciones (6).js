function Mostrar()
{

	var contador=0;
	var numero;
	var promedio;
	var acumulador=0;

	while(contador<5)
	{
		contador=contador+1;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		while(numero<-10||numero>10)
		{
			numero=prompt("error reingrese numero");
			numero=parseInt(numero);
		}
		acumulador=acumulador+numero
	}
	promedio= acumulador/5;
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN