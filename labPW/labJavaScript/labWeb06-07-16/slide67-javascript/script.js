botao = document.getElementById("calcule")
botao.onclick(){
	var raio = document.myform.raio.value;
	var circ = 2 * Math.PI * raio;
	circ = circ.toFixed(3);
	var area = Math.PI * raio * raio;
	area = area.toFixed(3);

	document.myform.circuferencia.value = circ;
	document.myform.area.value = area;
}