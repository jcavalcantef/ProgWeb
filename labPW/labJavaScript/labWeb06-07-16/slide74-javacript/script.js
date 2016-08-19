function desenhaGrafico(){
	//var v1 = document.myForm.valor1.value
	var v1 = document.getElementById('valor1').value;
	//document.myForm.elementName
	var v2 = document.getElementById('valor2').value;
	var v3 = document.getElementById('valor3').value;
	var v4 = document.getElementById('valor4').value;
	var v5 = document.getElementById('valor5').value;

	v1 = v1 + "px";
	v2 = v2 + "px";
	v3 = v3 + "px";
	v4 = v4 + "px";
	v5 = v5 + "px";

	document.getElementById('quadro1').style.height = v1;
	document.getElementById('quadro2').style.height = v2;
	document.getElementById('quadro3').style.height = v3;
	document.getElementById('quadro4').style.height = v4;
	document.getElementById('quadro5').style.height = v5;

	v1 = document.getElementById('largura').value;
	v1 = v1 + "px";

	document.getElementById('quadro1').style.width = v1;
	document.getElementById('quadro2').style.width = v1;
	document.getElementById('quadro3').style.width = v1;
	document.getElementById('quadro4').style.width = v1;
	document.getElementById('quadro5').style.width = v1;

	alert("Belo grafico =)");
}


