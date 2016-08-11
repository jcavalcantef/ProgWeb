<?php 

//namespace Equipamento\Sonoro;
include "Equipamento.php";

final class EquipamentoSonoro extends Equipamento {

	private $volume;
	public $stereo;

	function mono(){
		$this->stereo = false;
	}

	function stereo(){
		$this->stereo = true;
	}
	function setVolume($novoVolume){
		$this->volume = $novoVolume;
	}

	function getVolume(){
		
		return $this->volume;
	}

	function liga(){
		parent::liga();
		$this->volume = 5;
	}

}

?>