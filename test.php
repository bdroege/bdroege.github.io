<?php
// Define the API endpoint URL
$communityUrl = 'https://www.dojrp.com/';
$apiKey = 'a9d1bd5a56d74bbdfe5f261c169f2104';
$endpoint = '/core/members';

// Initialize cURL session
$curl = curl_init($communityUrl . $endpoint); // Change $url to $communityUrl

// Set cURL options
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => array('Authorization: Bearer ' . $apiKey),
));

// Execute the request
$response = curl_exec($curl);

// Check for errors
if ($response === false) {
    echo 'cURL error: ' . curl_error($curl);
} else {
    // HTTP status code
    $http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    
    // Check if the request was successful (status code 200)
    if ($http_status == 200) {
        // Parse the JSON response
        $data = json_decode($response, true);
        // Handle the data as needed
        var_dump($data);
    } else {
        // Print error message
        echo 'Error: HTTP status code ' . $http_status;
    }
}

// Close cURL session
curl_close($curl);
?>
