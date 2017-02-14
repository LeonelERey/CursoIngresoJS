function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var examen;

	examen=Math.floor(Math.random() * 10) + 1;
	if(examen<4)
		{
			alert("vamos;la proxima se puede");
		}
		else
		{
			if(examen>9)
			{
				alert("EXCELENTE");
			}
			else
			{
				alert("Aprobo");
			}
		}
}//FIN DE LA FUNCIÓN