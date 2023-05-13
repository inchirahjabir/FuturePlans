<?php
session_start();    
include "connection.php";
$firstname = $_POST['firstname']; 
$lastname = $_POST['lastname'];
?>


<!DOCTYPE html>
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <link href="accountinfo.css" rel="stylesheet" />
        <title>Account Information</title>
    </head>
    <body>
        <div class="background">
            <div class="logo"></div>

            <a href="index.html"/>
                <span class="home">Home</span>
            </a>

            <a href="aboutus.html"/>
                <span class="aboutus">About Us</span>
            </a>

            <a href="contactus.html"/>
                <span class="contactus">Contact Us</span>
            </a>

            <a href="logout.php"/>
                <div class="frame8">
                    <span class="logout">LOG OUT</span>
                </div>
            </a>


            <span class="text">Account Information</span>

            <form action="insert-info" method = "POST" style="margin: 550px; margin-top: 420px; width: 700px;">
                <label for="firstname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Enter your first name" required>
          
                <label for="lastname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Enter your last name" required>

                <label for="username">Username</label>
                <input type="text" id="uname" name="uname" placeholder="Enter your username" required>

                <label for="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" placeholder="Enter your phone number" required>

                <label for="email">Email Address </label>
                <input type="text" id="email" name="email" placeholder="Enter your email address" required>

                <label for="password">Change your password </label>
                <input type="password" id="oldpass" name="oldpass" placeholder="Enter your old password" required>
                <input type="password" id="newpass" name="newpass" placeholder="Enter your new password" required>

              <input type="submit" value="Save">

            </form>


        </div>

    </body>
</html>