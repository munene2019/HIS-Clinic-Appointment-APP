<?php

// Include your database connection file
include_once 'db_connection.php';

// Get the POST data
$data = json_decode(file_get_contents("php://input"));

// Read data
$patieNname = $data->patieNname;
$patient_No = generatePatientNo();//autogenerate
$dateOfBirth = $data->dateOfBirth;//
$nationalNo = $data->nationalNo;//
$gender = $data->gender;//
$countyCode = $data->countyCode;//
$mobileNo = $data->mobileNo;//
$email = $data->email;//
$alternativePersonNo = $data->alternativePersonNo;//
//$alternativeNo = $data->alternativeNo;//
$telephone = $data->telephone;//
$disabilityStatus = $data->disabilityStatus;//
$appointmentDate = $data->appointmentDate;//




// Insert user into the database
$query = "INSERT INTO `patient` (`p_name`, `p_no`, `date_of_birth`, `national_id`, `gender_code`, `countycode`, `mobile_no`, `email`, `contant_person_no`, `telephone_no`, `disability_status`, `appointment_date`)
 VALUES ('$patieNname', '$patient_No', '$dateOfBirth', '$nationalNo', '$gender', '$countyCode', '$mobileNo', '$email', '$alternativePersonNo', '$telephone', '$disabilityStatus', '$appointmentDate')";
if ($conn->query($query) === TRUE) {
    echo json_encode(array("message" => "Registration successful"));
} else {
    echo json_encode(array("message" => "Error: " . $query . "<br>" . $conn->error));
}



$conn->close();
function generatePatientNo($length = 10) {
    $min = pow(10, $length - 1);
    $max = pow(10, $length) - 1;
    
    return rand($min, $max);
}



?>
