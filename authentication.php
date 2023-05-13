<?php
    session_start();    
    include "connection.php";

    // Get the username entered
    $user = $_POST['user'];
    // Get the password entered  
    $pass = $_POST['pass'];  
     
    // Check if the username is already in the database. If it is, check the password, if it's not, print an error message.
    $stmt = $con->prepare("select * from users where username= ?");
        $stmt->bind_param("s", $user);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if ($stmt_result->num_rows > 0)
        {
            $data = $stmt_result->fetch_assoc();
            //Check if the password is the database. If it is, open the account window, if it's not print an error message. 
            if ($data['password'] === $pass)
            {
                echo '<script>
                window.location.href = "account.html";
                </script>';
            }
            else
            {
                echo '<script>
                alert("Login failed. Invalid username or password.");
                window.location.href = "login.html";
                </script>';
            }
        }
        else
        {
            echo '<script>
                alert("Login failed. Invalid username or password.");
                window.location.href = "login.html";
                </script>';
        }
        
?>