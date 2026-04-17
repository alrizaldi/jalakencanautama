<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $project = htmlspecialchars($_POST['project']);
    $message = htmlspecialchars($_POST['message']);

    // Set up the email
    $to = "jalakencanautama@gmail.com";
    $subject = "Someone Wants To Contact You";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Project: $project\n\n";
    $body .= "Message:\n$message";

    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
} else {
    echo "Invalid request method.";
}
