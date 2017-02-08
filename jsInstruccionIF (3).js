function Mostrar()
{
	//tomo la edad 
	var edad;
	edad=document.getElementById('edad').value;

	if(edad>17) 
	{
		alert("usted es mayor de edad");
	}
	else //no hace falta que me pregunte lo mismo dos veces para eso usamos else.
	{
		alert("usted es menor de edad"); //siempre que alla un if tambien habra un else.
	}
	

}//FIN DE LA FUNCIÓN
/* una manera de hacerlo seria
	if(edad>17) 
	{
		alert("usted es mayor de edad");
	}
	if(edad<18)
	{
		alert("usted es menor de edad");
	}
*/