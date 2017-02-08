function Mostrar()
{//tomo la edad  
var edad;
edad=document.getElementById('edad').value;

if(edad<18&&edad>12)
	{
		alert("usted es un adolecente");
	}
}//FIN DE LA FUNCIÓN

/* otra manera de hacerlo es:
var edad;
edad=document.getElementById('edad').value;

if(edad<18)
	{
		if(edad>12)

		{
		alert("usted no es un adolecente");
		}
	}
}*/