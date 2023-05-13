<?php
    session_start();
    //Connect to the database
    include('connection.php');

    //Get the email, username and password entered
    $email = $_POST['email'];  
    $user = $_POST['user'];  
    $pass1 = $_POST['pass1']; 

    // Check if the email entered is already taken. If it is, print a message. 
    $stmt = $con->prepare("select * from users where email= ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if ($stmt_result->num_rows > 0)
    {
        echo '<script>
                alert("The email address is taken! Enter a new email address.");
                window.location.href = "getstarted.html";
                </script>';
        exit();
    }

    // Check if the username entered is already taken. If it is, print a message.
    $stmt2 = $con->prepare("select * from users where username= ?");
    $stmt2->bind_param("s", $user);
    $stmt2->execute();
    $stmt2_result = $stmt2->get_result();
    if ($stmt2_result->num_rows > 0)
    {
        echo '<script>
        alert("The username is taken! Enter a new username.");
        window.location.href = "getstarted.html";
        </script>';
        exit();
    }


    // If the email and username are not taken, add them to the database. If something goes wrong, print an error message and reload the sign up window. 
    else if ($stmt_result->num_rows == 0 && $stmt2_result->num_rows == 0) 
        {
            $result = "INSERT INTO users(email, username, password) VALUES ('$email','$user','$pass1')";
            if (mysqli_query($con, $result)) {
                echo '<script>
                alert("Your registration was succesful!");
                window.location.href = "login.html";
                </script>';
            } else {
                echo '<script>
                alert("Something went wrong. Please try again.");
                window.location.href = "getstarted.html";
                </script>';
            }
        }

?>