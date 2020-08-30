<?php

$msg = $_POST['text'];

if(!empty($msg)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "bottle";

    // connect db
    $con = new mysqli($host, $dbusername, $dbpassword, $dbname);
    if(mysqli_connect_error()) {
        die('Connect Error('. mysqli_connect_error .') '. mysqli_connect_error());
    } else {
        $sql = "INSERT INTO msgs (msg) 
        values ('$msg')";
        if($con->query($sql)) {
            echo "Your message has been sent";
        } else {
            echo "Error: ". $sql ."<br>". $con->error;
        }
        $con->close();
    }
} else {
    echo "Message can not be empty";
    die();
}

?>