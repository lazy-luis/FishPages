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

if (isset($POST['Email'])) {

    $Name = $POST['Name'];
    $Email = $POST['Email'];
    $Phone = $POST['Phone'];
    $Country = $POST['Country'];
    $Coin = $POST['Coin'];
    $Amount = $POST['Amount'];
    $Sale_Type = $POST['Sale_Type'];

    $phpmailer->Subject = "Presale Request For $Name";
    $phpmailer->addReplyTo($Email, $Name);


    $phpmailer->Body = "
        <h3>
            Full Name : $Name <br>
            Email : $Email <br>
            Phone : $Phone <br>
            Country : $Country <br>
            Coin : $Coin <br>
            Amount : $Amount <br>
            Sale Type : $Sale_Type <br>
        </h3>
    ";

    $list_id = '1c8e2dfb15';
    $api_key = 'f1984a8f8de0d6f78318a0294279641b-us2';

    $data_center = substr($api_key, strpos($api_key, '-') + 1);

    $url = 'https://' . $data_center . '.api.mailchimp.com/3.0/lists/' . $list_id . '/members';

    $json = json_encode([
        'email_address' => $Email,
        'status'        => 'subscribed',
        'merge_fields'  => [
            'FNAME' => $Name,
            'PHONE' => $Phone
        ]
    ]);

    try {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $api_key);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        $result = curl_exec($ch);
        $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        $result = json_decode($result, true);
        if ($result['status'] == 'subscribed') {
            try {
                $phpmailer->send();
                echo 'Sent';
            } catch (Exception $e) {
                echo 'error';
            }
        } else {
            if ($result["title"] == "Member Exists") {
                echo "Already Subscribed";
            } else {
                echo "Error on Sub";
            }
        }
    } catch (Exception $e) {
        $Return['message'] = $e->getMessage();
    }
}
