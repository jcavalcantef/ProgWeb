<?php  

//namespace Equipamento;

abstract class Equipamento {
	//atributos
	public $ligado;

	//metodos
	function liga(){
		$this->ligado = true;
	}
	function desliga(){
		$this->ligado = false;
	}
}

?>