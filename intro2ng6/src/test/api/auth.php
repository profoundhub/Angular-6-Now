<?php 

if (isset($_POST) && !empty($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == 'admin' && $password == 'admin') {
        ?>
        {
            "success": true;
            "secret": "This is the Secret, only the Admins Know!"
        }
<?php 
    } else {
?>
        {
            "success": false;
            "secret": "Invalid Credentials!"
        }        
<?php
    }
} else {
?>
        {
            "success": false;
            "secret": "Only POST Access Accepted"
        }
            <?php    
}
?>