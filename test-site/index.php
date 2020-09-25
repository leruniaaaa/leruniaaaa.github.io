<?php
    echo "<strong>_POST array:</strong><br>";
    print_r($_POST);
    echo "<br><br><br>";



    if(!empty($_POST)){


        $message = "New message from site \n"
        .  "Name: " . $_POST['userName'] ."\n"
        . "Email: " . $_POST['userEmail'] ."\n"
        . "Message: \n" . $_POST['message'];


        $resaulMail = mail("valeriiakirchevaa@gmail.com", "message from site", $message);

        if($resaulMail ) {
            echo "Yes!";

        }else{
            echo "No!";
        }
    }




   

    

?>

<form action="index.php" method="post">
    <input type="text" name="userName" placeholder="Name"><br>
    <input type="text" name="userEmail" placeholder="Email"><br>
    <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea><br>
    <input type="submit" value="Send Form!">
</form>







<!-- 

// $string = "Это строчная переменная.";
// $integer = 50;
// $boolean = true;
// $null = null;

// echo $null; -->