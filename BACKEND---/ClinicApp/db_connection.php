<?php

// Replace with your actual database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "clinicappointmentdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array("message" => "Connection failed: " . $conn->connect_error)));
}

?>
