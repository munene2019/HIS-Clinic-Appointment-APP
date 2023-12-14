<?php


// Include your database connection file
include_once 'db_connection.php';
error_reporting(E_ALL);
ini_set('display_errors', 'On');
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    
}


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}
$jsonInput = file_get_contents("php://input");
$data = json_decode($jsonInput);
$username = $data->username;

// Check for JSON decoding errors
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Bad Request
    echo json_encode(array('error' => 'Invalid JSON data'));
    exit;
}
// Get the POST data


// Read data
$username = $data->username;
$password = $data->password;
$service = $data->service;


if($service==="login"){
// Check if the user exists in the database
$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    // Return success response
    echo json_encode(array("success" => true, "data" => "Login successful"));
} else {
    // Return fail response
    echo json_encode(array("success" => false, "error" => "Invalid username or password"));
}

// Close database connection
$conn->close();
}
else{
    echo json_encode(array("false" => false, "error" => "Invalid request"));

}

?>
