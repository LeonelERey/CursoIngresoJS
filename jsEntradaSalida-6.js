/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerouno;
	var numerodos;
	var resultado;
	/*si colocamos esto antes no funciona
	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);
	ya que me tanforma un valor q no existe*/

	numerouno = document.getElementById('numeroUno').value;
	numerodos = document.getElementById('numeroDos').value;
	
	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);
	resultado = numerouno+numerodos
	
	alert("la suma es "+resultado);

//alert(numerouno+numerodos) //estos es concatenar no funcinara la suma
//alert(parseInt(numerouno)+parseInt(numerodos))  //una manera de que funcione

 /*
	numerouno = parseInt(numerouno);
	numerodos = parseInt(numerodos);
	alert(numerouno+numerodos)
	*/
}