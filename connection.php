<?php

    // The information for the database I used (host,user,password and database name).
    $host = "localhost";  
    $user = "root";  
    $password = "futureplans2022@";  
    $db_name = "futureplans";  
    
    //Connect to the database
    $con = mysqli_connect($host, $user, $password, $db_name);

    //If the connection is impossible, print an error message. 
    if (!$con) 
    {
        echo "Connection failed!";
    }
?> 