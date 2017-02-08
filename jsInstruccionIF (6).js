function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;

	if(edad>17)
	{
		alert("usted es mayor de edad");
	}
		else
		{
			if(edad<13)
			{
				alert("usted es menor de edad");
			}
			
				else
				{	
					alert("usted es un adolecente");
				}
			
		}



}//FIN DE LA FUNCIÓN