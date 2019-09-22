<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['firstname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$msg = $_POST['text'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'thewebase@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'theoneinhandler19'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('dmytros92@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('longsock46@gmail.com');     // Кому будет уходить письмо
$mail->addAddress('yuripereverzev@gmail.com');               // Name is optional

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'A new contacts submission';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone . '<br>Почта этого пользователя: ' .$email . 'Их сообщение: ' .$msg;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>
