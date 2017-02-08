/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var Fahrenheit;
	var Fahrenheitresultado;
	var FahrenheitCentigrados;

	Fahrenheit=document.getElementById('Temperatura').value;
	
	Fahrenheitresultado=Fahrenheit-32
	FahrenheitCentigrados=Fahrenheitresultado*1.8;

	alert(Fahrenheit+" Fahrenheit son "+FahrenheitCentigrados+" centigredos");

}

function CentigradosFahrenheit () 
{
	var centigrados;
	var centigradosresultado;
	var centigradosFahrenheit;

	centigrados=document.getElementById('Temperatura').value;

	centigrados=parseInt(centigrados);
	centigradosresultado=centigrados*9/5
	centigradosFahrenheit=centigradosresultado+32;

	alert(centigrados+" centigrados son "+centigradosFahrenheit+" Fahrenheit");
}
