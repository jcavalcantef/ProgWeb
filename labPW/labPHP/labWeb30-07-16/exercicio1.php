<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Lab de Programação Web</title>
</head>
<body>
	<h1>Este é um grande Cabeçalho</h1>
	<h3>E este é um pequeno cabeçalho</h3>
	<p>
		Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou <a href="http://icomp.ufam.edu.br/david">http://icomp.ufam.edu.br/david</a>
	</p>
	<form method="post" action="imprime.php" >
   		<table>
	   		<tr>
	     		<td>Nome: </td> <td> <input type="text" name="nome" size="44" /> </td>
	    	</tr>
	    	<tr><td>Sexo: </td>
	     		<td>
	     			<select name="sexo">
				 		<option value="m">masculino</option>
				    	<option value="f">feminino</option>
					</select> 
				</td>
	    	</tr>
	    	<tr>
	     		<td>Comentario: </td><td><textarea  name="comentario"  rows="5" cols="35"/></textarea></td>
	    	</tr>
	    	<tr>
	     		<td></td><td><input  type="submit"  value="Enviar"></td>
	    	</tr>
	</form>


</body>
</html>