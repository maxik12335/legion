<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $phone = htmlspecialchars($_POST['phone']);
  $to = 'maxim.it@bk.ru';
  $subject = 'Новая заявка с сайта';
  $message = "Телефон: $phone";
  $headers = 'From: webmaster@example.com' . "\r\n";

  if (mail($to, $subject, $message, $headers)) {
    echo 'Письмо отправлено!';
  } else {
    echo 'Ошибка отправки.';
  }
}