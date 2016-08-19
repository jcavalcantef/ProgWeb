<?php 
	$usuario = "root";
	$senha =   "";

	try{
		$conn = new PDO("mysql:host=localhost;dbname=gomoku", $usuario, $senha);
		print "Conexao efetuada com sucesso!";
	}catch(PDOException $e){
		echo $e->getMessage();
	}
	$nome = $_POST["nome"];
	$sexo = $_POST["sexo"];
	$comentario = $_POST["comentario"];
	echo "<br>" . $nome . "<br>" . $sexo . "<br>" . $comentario;

	//Persistência dos dados
	$stmt = $conn->prepare('INSERT INTO comentario(nome, sexo, comentario) VALUES (:nome, :sexo, :comentario)');
	$stmt->bindValue(':nome', $nome);
	$stmt->bindValue(':sexo', $sexo);
	$stmt->bindValue(':comentario', $comentario);
	$stmt->execute();
	
	//recupera dados 
	$conn->exec("set names utf8");
	$stmt = $conn->prepare('SELECT * FROM comentario');
	$stmt->execute();
	while($row = $stmt->fetch()) {
		print ($row['nome'] ."<br>".  $row['sexo'] ."<br>". $row['comentario'] );
	}

	$conn = NULL;
	
?>