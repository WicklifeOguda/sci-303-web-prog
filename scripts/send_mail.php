<?php
    $name = $_POST['name'];
    $sender_email = $_POST['email'];
    $subject = $_POST['subjetc'];
    $message = $_POST['message'];

    $email_from = 'holicx@gmail.com';

    $to = 'holicx@gmail.com';
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $sender_email \r\n";

    mail($to, $subject, $message, $headers);