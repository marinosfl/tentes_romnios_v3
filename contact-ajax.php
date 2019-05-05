<?php

if (isset($_POST['name'])) {

  require_once('../../../wp-load.php');

  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'afoutopatisa@hotmail.com';
  $subject = 'contact tentes';
  $headers[] = 'From: ' . $name . ' <' . $email . '>';

  wp_mail($to, $subject, $message, $headers);

  $mail['name'] = $name;
  $mail['headers'] = $headers;

  echo json_encode($mail);
}
