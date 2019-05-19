<?php

if (isset($_POST['name'])) {

  require_once('../../../wp-load.php');

  $name = strip_tags($_POST['name']);
  $email = strip_tags($_POST['email']);
  $address = strip_tags($_POST['address']);
  $tel = strip_tags($_POST['tel']);
  // $message = strip_tags($_POST['message']);
  $message =
    '<html><body>
    <h5>Όνομα: ' . $name . '</h5>
    <h5>Email: ' . $email . '</h5>
    <h5>Τηλέφωνο: ' . $tel . '</h5>
    <h5>Διεύθυνση: ' . $address . '</h5>
    <p>' . strip_tags($_POST['message']) . '</p>
  </body></html>';

  $to = 'afoutopatisa@hotmail.com';
  $subject = 'contact tentes';
  $headers = 'From: ' . $email . "\r\n";
  $headers .= 'Reply-To: ' . $email . "\r\n";
  $headers .= 'MIME-Version: 1.0' . "\r\n";
  $headers .= 'Content-Type: text/html; charset=utf-8' . "\r\n";

  wp_mail($to, $subject, $message, $headers);

  // $mail['name'] = $name;
  // $mail['headers'] = $headers;

  // echo json_encode($mail);
}
