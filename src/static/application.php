<?
// echo '1';
// print_r($_POST);
	$name = htmlspecialchars($_POST["name"]);
	$email = htmlspecialchars($_POST["phone"]);

$arr = array(
	'error' => [
			'tel' => 'какой телефон?',
			'name' => 'О_о',
	],
	'placeholder' => 1,
	'result' => 0
);
if($name&&$email){
	foreach ($_POST as $key=>$item){
			$message .= $key . ' - ' . $item . "\n";
	}
	$infoF = '';
	$infoF .= $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['SERVER_NAME'].$fI[1]."\n";
	$to      = '';
	$subject = ": Зворотній зв'язок";
	$message .= $infoF;
	mail($to, $subject, $message);
   echo json_encode([ 'error' => 0, 'code_error' => 'sendingSuccessText' ]);
}else {
	echo json_encode([ 'error' => 1, 'code_error' => 'connectionFailed' ]);
}

?>