<?php

// When the logout button is pressed, end the session and take the user back to the login page.
session_start();
unset($_SESSION["username"]);
unset($_SESSION["password"]);
header("Location:login.html");
?>