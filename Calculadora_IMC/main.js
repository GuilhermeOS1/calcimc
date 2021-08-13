var peso;
var altura;
var imc;
var resultado

function calcular() {
	peso = document.getElementById('peso').value;
	altura = document.getElementById('altura').value;
	imc = peso/(altura*altura);

	if (imc < 18.5) {
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Seu imc é: ' + imc.toFixed(2) + '<br><h3>Abaixo do peso</h3>';
		return false;
	}else if (imc >  18.5 && imc < 24.9) {
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Seu imc é: ' + imc.toFixed(2) + '<br><h3>Peso normal</h3>';
		return false;
	}else if (imc > 25 && imc < 29.9) {
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Seu imc é: ' + imc.toFixed(2) + '<br><h3>Sobrepeso</h3>';
		return false;
	}else if (imc > 30 && imc < 34.9) {
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Seu imc é: ' + imc.toFixed(2) + '<br><h3>Obesidade grau 1</h3>';
		return false;
	}else if (imc > 35 && imc < 39.9) {
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Seu imc é: ' + imc.toFixed(2) + '<br><h3>Obesidade grau 2</h3>';
		return false;
	}else if (imc > 40) {
		resultado = document.getElementById('resultado');
		resultado.innerHTML = 'Seu imc é: ' + imc.toFixed(2) + '<br><h3>Obesidade morbida</h3>';
		return false;
	}else{
		alert('Erro digite novamente')
		return false;
	}
}
