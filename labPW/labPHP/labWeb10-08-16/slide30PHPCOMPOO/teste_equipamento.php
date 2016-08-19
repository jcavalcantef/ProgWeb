<?php  

ini_set('display_errors',1);

include_once "EquipamentoSonoro.php";

$obj1 = new EquipamentoSonoro;
$obj1->liga();
$obj1->mono();

$obj2 = new EquipamentoSonoro;
$obj2->liga();
$obj2->setVolume(8);
$obj2->stereo();

var_dump($obj1,$obj2);
echo "<br>" . "<br>";
echo "obj1 ligado: " .  $obj1->ligado . " stereo: " . $obj1->stereo . "<br>";
echo "obj2 ligado: " .  $obj2->ligado . " Volume: " . $obj2->getVolume() . " stereo: " . $obj2->stereo; 

?>