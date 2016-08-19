<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<h1>Este é um grande cabeçalho</h1>
	<h5>Pequeno cabeçalho</h5>
	<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
	
	<form method="post" action="pdo.php">
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