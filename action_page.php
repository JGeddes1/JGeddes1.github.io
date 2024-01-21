<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // POST the form data
    $name = $_POST["Name"];
    $email = $_POST["Email"];
    $subject = $_POST["Subject"];
    $message = $_POST["Message"];

    // Print the form data (you may want to do something more useful with it)
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Subject: " . $subject . "<br>";
    echo "Message: " . $message . "<br>";
} else {
    // Handle the case where the form wasn't submitted via POST
    echo "Form not submitted.";
}
?>

