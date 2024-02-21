<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'daniilagapov822@gmail.com';                     //SMTP username
    $mail->Password   = 'ymtsvzartztwuwci';                               //SMTP password
    $mail->SMTPSecure = 'TLS';            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('daniilagapov822@gmail.com', 'Olimpus');
    $mail->addAddress('all_data_olimpus@olimpus-tutor.ru', 'Olimpus');     //Add a recipient

    //Тело письма
    $body = '<h1> Запись на курс:</h1>';
    $body .= '<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    $body .= '<p><strong>Телефон:</strong> '.$_POST['number'].'</p>';
    $body .= '<p><strong>Предмет:</strong>'.$_POST['subject'].'</p>';
    $body .= '<p><strong>Курс:</strong>'.$_POST['course'].'</p>';
    $body .= '<p><strong>Преподаватель:</strong>'.$_POST['tutor'].'</p>';
    $body .= '<p><strong>Период:</strong>'.$_POST['period'].'</p>';


    $mail->Body = $body;

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = $body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


    ?>