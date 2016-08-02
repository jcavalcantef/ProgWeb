//flag controla vez de quem joga
var jogador1 = 0;
var jogador2 = 1;

// contador do ganhador , quando o valor chega a 5 é porque ganhou
var ganhadorX = 0;
var ganhadorO = 0;

document.getElementById("jogador_2").src = "img/0.gif";
document.getElementById("jogador_1").src = "img/0.gif";

// Inicializa tabuleiro
function tabuleiro() {
	var body = document.getElementById("body");
	var tabela = document.createElement("table");
	body.appendChild(tabela);
	var corpoTabela = document.createElement("tbody");
	tabela.appendChild(corpoTabela);

	var thead = document.createElement("thead");
	corpoTabela.appendChild(thead);

	var i,j = 0;
	for(i = 0; i<15; i++ ){
		// Criando linha da tabela
		var linha = document.createElement("tr");
		corpoTabela.appendChild(linha);

		for(j=0; j < 15; j++){
			var coluna = document.createElement("td");
			corpoTabela.appendChild(coluna);
			var link = document.createElement("a");
			coluna.appendChild(link);
			//link.id = "0" + i + j ;

			var img = document.createElement("img");  
    		img.src = "img/0.gif";
    		link.appendChild(img);
    		img.id = i + "," + j; 

    		link.href = "javascript:clica("+ i + ","+ j +")";
		}
	}
}

var imagemClicada;
function clica(i,j){
	console.log("jogador1 " + jogador1);
	console.log("jogador2 " + jogador2);
	var bool;

	imagemClicada = document.getElementById(i+ "," + j );
	if((jogador1 == 0) && (imagemClicada.src.endsWith("0.gif")) ){ //se for 0 ele joga se 1 não joga
		//faz algo
		document.getElementById("jogador_2").src = "img/0.gif";
		document.getElementById("jogador_1").src = "img/1.gif";
		imagemClicada.src =  "img/1.gif";
		bool = verificaVencedor(i,j,'X');
		if(bool) { // bloqueia jogadores
			jogador1 = 1; 
			jogador2 = 1; 
			// exibe vencedor X
			document.getElementById("win").innerHTML='<img src="img/1.gif" />&nbsp;venceu!';
			document.getElementById("id01").style.display="block";
		}else{
			jogador1 = 1;
			jogador2 = 0;
		}

		return ;
		
	}
	if((jogador2 == 0) && (imagemClicada.src.endsWith("0.gif")) ){
		// faz algo
		document.getElementById("jogador_1").src = "img/0.gif";
		document.getElementById("jogador_2").src = "img/2.gif";
		imagemClicada.src =  "img/2.gif";
		bool = verificaVencedor(i,j,'O'); 
		if(bool) { // bloqueia jogadores
			jogador1 = 1; 
			jogador2 = 1;
			// Exibe vencedor O
			document.getElementById("win").innerHTML='<img src="img/2.gif" />&nbsp;venceu!';
			document.getElementById("id01").style.display="block"; 
		}else{
			jogador2 = 1;
			jogador1 = 0;
		}
		return ;
	}
	return ;
}

//Verifica Vencedor
function verificaVencedor(i,j,jogador) {

	if(verificaNorte(i,j,jogador))    return true; // verifica sul tambem 
	if(verificaLeste(i,j,jogador))    return true; // verifica oeste tambem
	if(verificaNordeste(i,j,jogador)) return true; // verifica sudoeste tambem
	if(verificaNoroeste(i,j,jogador)) return true; // verifica sudoeste tambem

	return false;
}

function verificaNorte(i,j,jogador){
	if(jogador == 'X') ganhadorX++;
	if(jogador == 'O') ganhadorO++;
	var conta = 1;
	var flag = 0;
	if(i > 3){
		for(conta = 1; conta < 5; conta++){ // verifica 4 blocos acima
			flag = auxNorte(i,j,flag,conta,jogador); if( flag == 1) break;
			if(document.getElementById((i-conta) + ","+j).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i-conta) + ","+j).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		}
	}else{
		if( i == 0); // não verifica
		if( i == 1) { // verifica 1 bloco acima
			flag = auxNorte(i,j,flag,conta,jogador);
			if(document.getElementById((i-conta) + ","+j).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i-conta) + ","+j).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		} 
		if( i == 2 ){ // verifica 2 blocos acima
			for(conta = 1; conta < 3; conta++){ 
				flag = auxNorte(i,j,flag,conta,jogador); if( flag == 1) break;
				if(document.getElementById((i-conta) + ","+j).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i-conta) + ","+j).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
		if( i == 3){ // verifica 3 blocos acima	
			for(conta = 1; conta < 4; conta++){ 
				flag = auxNorte(i,j,flag,conta,jogador); if( flag == 1) break;
				if(document.getElementById((i-conta) + ","+j).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i-conta) + ","+j).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
	}
	if(flag == 0) verificaSul(i,j,jogador);	
	console.log("ganhadorX "+ ganhadorX);
	console.log("ganhadorO "+ ganhadorO);
	if(ganhadorX > 4)  return true;
	if(ganhadorO > 4)  return true;
	setaGanhador();
	return false;
}	
function verificaNordeste(i,j,jogador) {
	if(jogador == 'X') ganhadorX++;
	if(jogador == 'O') ganhadorO++;
	var conta = 1;
	var flag = 0;
	if( (i > 3 ) && (j < 11) ){ 
		for(conta = 1; conta < 5; conta++){ // verfica 4 blocos acima a direita
			flag = auxNordeste(i,j,flag,conta,jogador); if( flag == 1) break;
			if(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		}
	}else{
		if( ((i == 0) && (j == 0)) || ((i == 0) && (j == 14)) || ((i == 14) && (j == 14)) ); // não verifica
		if( ((i == 1) && (j == 1)) || ((i == 1) && (j == 13)) || ((i == 13) && (j == 13)) ) { // verifica 1 bloco diagonal acima
			flag = auxNordeste(i,j,flag,conta,jogador);
			if(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		} 
		if( ((i == 2) && (j == 2)) || ((i == 2) && (j == 12)) || ((i == 12) && (j == 12)) ){ // verifica 2 blocos a noroeste
			for(conta = 1; conta < 3; conta++){ 
				flag = auxNordeste(i,j,flag,conta,jogador); if( flag == 1) break;
				if(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
		if( ((i == 3) && (j == 3)) || ((i == 3) && (j == 11)) || ((i == 11) && (j == 11)) ){ // verifica 3 blocos acima	
			for(conta = 1; conta < 4; conta++){ 
				flag = auxNordeste(i,j,flag,conta,jogador); if( flag == 1) break;
				if(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
	}
	if(flag == 0) verificaSudoeste(i,j,jogador);	
	if(ganhadorX > 4) alert("ganhou o X");
	if(ganhadorO > 4) alert("ganhou o O");
	setaGanhador();
}
function verificaLeste(i,j,jogador) {
	if(jogador == 'X') ganhadorX++;
	if(jogador == 'O') ganhadorO++;
	var conta = 1;
	var flag = 0;
	if(j < 11){
		for(conta = 1; conta < 5; conta++){ // verifica 4 bloco a direita 
			flag = auxLeste(i,j,flag,conta,jogador); if( flag == 1) break;
			if(document.getElementById(i + ","+ (j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById(i + ","+ (j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		}
	}else{
		if( j == 14 ); // não verifica
		if( j == 13 ) { // verifica 1 bloco a direita 
			if(document.getElementById(i + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById(i + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		} 
		if( j == 12 ){ // verifica 2 blocos a direita
			for(conta = 1; conta < 3; conta++){
				flag = auxLeste(i,j,flag,conta,jogador); if( flag == 1) break; 
				if(document.getElementById(i + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById(i + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
		if( j == 11 ){ // verifica 3 blocos direita	
			for(conta = 1; conta < 4; conta++){
				flag = auxLeste(i,j,flag,conta,jogador); if( flag == 1) break; 
				if(document.getElementById(i + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById(i + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
	}
	if(flag == 0) verificaOeste(i,j,jogador);
	if(ganhadorX > 4) alert("ganhou o X");
	if(ganhadorO > 4) alert("ganhou o O");
	setaGanhador();
}

function verificaSudeste(i,j,jogador) {
	var conta = 1;
	if( (i < 11 ) && (j < 11) ){ // verifica 4 blocos a direita abaixo
		for(conta = 1; conta < 5; conta++){
			if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("0.gif")){ break;} 
			if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		}
	}else{
		if( ((i == 0) && (j == 14)) || ((i == 14) && (j == 0)) || ((i == 14) && (j == 14)) ); // não verifica
		if( ((i == 1) && (j == 13)) || ((i == 13) && (j == 1)) || ((i == 13) && (j == 13))  ) { // verifica 1 bloco  a direita abaixo		
			if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		} 
		if( ((i == 2) && (j == 12)) || ((i == 12) && (j == 2)) || ((i == 12) && (j == 12)) ){ // verifica 2 blocos a direita abaixo
			for(conta = 1; conta < 3; conta++){ 
				if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("0.gif")){ break;} 
				if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
		if( ((i == 3) && (j == 11)) || ((i == 11) && (j == 3)) || ((i == 11) && (j == 11))  ){ // verifica 3 blocos a direita abaixo
			for(conta = 1; conta < 4; conta++){ 
				if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("0.gif")){ break;}  
				if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i+conta) + ","+(j+conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
	}
}
function verificaSul(i,j,jogador) {
	var conta = 1;
	if((i < 11) ){ // verifica 4 blocos abaixo
		for(conta = 1; conta < 5; conta++){
			if(document.getElementById((i+conta) + ","+j).src.endsWith("0.gif")){ break;} 
			if(document.getElementById((i+conta) + ","+j).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i+conta) + ","+j).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		}
	}else{
		if( i == 14);  // não verifica
		if( i == 13) { // verifica 1 bloco abaixo
			if(document.getElementById((i+conta) + ","+j).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i+conta) + ","+j).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		} 
		if( i == 12 ){ // verifica 2 blocos acima 
			for(conta = 1; conta < 3; conta++){
				if(document.getElementById((i+conta) + ","+j).src.endsWith("0.gif")){ break;} 
				if(document.getElementById((i+conta) + ","+j).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i+conta) + ","+j).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
		if( i == 11){ // verifica 3 blocos acima
			for(conta = 1; conta < 4; conta++){
				if(document.getElementById((i+conta) + ","+j).src.endsWith("0.gif")){ break;} 
				if(document.getElementById((i+conta) + ","+j).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i+conta) + ","+j).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
	}	
}
function verificaSudoeste(i,j,jogador) {
	
	var conta = 1;
	if( (i < 11 ) && (j > 3) ){ // verifica 4 blocos diagonal abaixo
		for(conta = 1; conta < 5; conta++){
			if(document.getElementById((i+conta) + ","+j).src.endsWith("0.gif")){ break;} 
			if(document.getElementById((i+conta) + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i+conta) + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		}
	}else{
		if( ((i == 0) && (j == 0)) || ((i == 14) && (j == 0)) || ((i == 14) && (j == 14)) ); // não verifica
		if( ((i == 1) && (j == 1)) || ((i == 13) && (j == 1)) || ((i == 13) && (j == 13))  ) { // verifica 1 bloco diagonal abaixo		
			if(document.getElementById((i+conta) + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i+conta) + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		} 
		if( ((i == 2) && (j == 2)) || ((i == 12) && (j == 2)) || ((i == 12) && (j == 12)) ){ // verifica 2 blocos diagonal abaixo
			for(conta = 1; conta < 3; conta++){ 
				if(document.getElementById((i+conta) + ","+j).src.endsWith("0.gif")){ break;} 
				if(document.getElementById((i+conta) + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i+conta) + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
		if( ((i == 3) && (j == 3)) || ((i == 11) && (j == 3)) || ((i == 11) && (j == 11))  ){ // verifica 3 blocos diagonal abaixo
			for(conta = 1; conta < 4; conta++){ 
				if(document.getElementById((i+conta) + ","+j).src.endsWith("0.gif")){ break;} 
				if(document.getElementById((i+conta) + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i+conta) + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
	}
}
function verificaOeste(i,j,jogador) {
	// body...
	var conta = 1;
	if(j > 3){
		for(conta = 1; conta < 5; conta++){ // verifica 4 bloco a esquerda 
			if(document.getElementById(i + ","+ (j-conta)).src.endsWith("0.gif")) { break;} 
			if(document.getElementById(i + ","+ (j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById(i + ","+ (j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		}
	}else{
		if( j == 0); // não verifica
		if( j == 1) { // verifica 1 bloco a esquerda 
			if(document.getElementById(i + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById(i + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		} 
		if( j == 2 ){ // verifica 2 blocos a esquerda
			for(conta = 1; conta < 3; conta++){
				if(document.getElementById(i + ","+ (j-conta)).src.endsWith("0.gif")) { break;} 
				if(document.getElementById(i + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById(i + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
		if( j == 3){ // verifica 3 blocos esquerda	
			for(conta = 1; conta < 4; conta++){ 
				if(document.getElementById(i + ","+ (j-conta)).src.endsWith("0.gif")) { break;}
				if(document.getElementById(i + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById(i + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
	}
}
function verificaNoroeste(i,j,jogador) {
 	if(jogador == 'X') ganhadorX++;
	if(jogador == 'O') ganhadorO++;
	var conta = 1;
	var flag = 0;
	if( (i > 3 ) && (j > 3) ){ 
		for(conta = 1; conta < 5; conta++){ // verifica os 4 blocos acima esquerda
			flag = auxNoroeste(i,j,flag,conta,jogador); if( flag == 1) break;
			if(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		}
	}else{
		if( ((i == 0) && (j == 0)) || ((i == 0) && (j == 14)) || ((i == 14) && (j == 0)) ); // não verifica
		if( ((i == 1) && (j == 1)) || ((i == 1) && (j == 13)) || ((i == 13) && (j == 1)) ) { // verifica 1 bloco acima esquerda
			flag = auxNoroeste(i,j,flag,conta,jogador);
			if(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
			if(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
		} 
		if( ((i == 2) && (j == 2)) || ((i == 2) && (j == 12)) || ((i == 12) && (j == 2)) ){ // verifica 2 blocos acima esquerda
			for(conta = 1; conta < 3; conta++){ 
				flag = auxNoroeste(i,j,flag,conta,jogador); if( flag == 1) break;
				if(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
		if( ((i == 3) && (j == 3)) || ((i == 3) && (j == 11)) || ((i == 11) && (j == 3)) ){ // verifica 3 blocos acima esquerda
			for(conta = 1; conta < 4; conta++){ 
				flag = auxNoroeste(i,j,flag,conta,jogador); if( flag == 1) break;
				if(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("1.gif") && (jogador == 'X' ) ) ganhadorX++;
				if(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("2.gif") && (jogador == 'O' ) ) ganhadorO++;
			}
		}
	}
	if(flag == 0) verificaSudeste(i,j,jogador);	
	if(ganhadorX > 4) alert("ganhou o X");
	if(ganhadorO > 4) alert("ganhou o O");
	setaGanhador();
}

function auxNorte(i,j,flag,conta,jogador){
	// verifica X até encontrar bloco diferente depois volta a contar do sul
	if((jogador == 'X') && (!(document.getElementById((i-conta) + ","+j).src.endsWith("1.gif"))) ) { 
		flag = 1; verificaSul(i,j,'X'); return flag;
	}
	// verifica O até encontrar bloco diferente depois volta a contar do sul
	if((jogador == 'O') && (!(document.getElementById((i-conta) + ","+j).src.endsWith("2.gif")))  ){
		flag = 1; verificaSul(i,j,'O'); return flag;   
	}
	return 0;	
}
function auxLeste(i,j,flag,conta,jogador){
	//
	if((jogador == 'X') && (!(document.getElementById(i + ","+(j+conta)).src.endsWith("1.gif"))) ) { 
		flag = 1; verificaOeste(i,j,'X'); return flag;
	}
	if((jogador == 'O') && (!(document.getElementById(i + ","+(j+conta)).src.endsWith("2.gif")))  ){
		flag = 1; verificaOeste(i,j,'O'); return flag;   
	}
	return 0;
}
function auxNordeste(i,j,flag,conta,jogador){
	if((jogador == 'X') && (!(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("1.gif"))) ) { 
		flag = 1; verificaSudoeste(i,j,'X'); return flag;
	}
	if((jogador == 'O') && (!(document.getElementById((i-conta) + ","+(j+conta)).src.endsWith("2.gif")))  ){
		flag = 1; verificaSudoeste(i,j,'O'); return flag;   
	}
	return 0;
}
function auxNoroeste(i,j,flag,jogador){
	if((jogador == 'X') && (!(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("1.gif"))) ) { 
		flag = 1; verificaSudoeste(i,j,'X'); return flag;
	}
	if((jogador == 'O') && (!(document.getElementById((i-conta) + ","+(j-conta)).src.endsWith("2.gif")))  ){
		flag = 1; verificaSudoeste(i,j,'O'); return flag;   
	}
	return 0;
}

function setaGanhador(){
	ganhadorX = 0;
	ganhadorO = 0;
}


tabuleiro();