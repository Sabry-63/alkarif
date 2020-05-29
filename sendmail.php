<?php

$name = $_POST['first_name']." ".$_POST['last_name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name,
			\nEmail: $email,
			\nMessage: $message";
$recipient = "yourmail@demo.com";
$subject = $_POST['subject'];
$mailheader = "From: $email \r\n";
$mailheader .= "Reply-To: $email \r\n";
mail($recipient, $subject, $formcontent, implode("\r\n", $mailheader)) or die("Error!");
echo '<div class="form-group">
<div style="background: #fff;padding-top:200px;color:#fff;">
	<div class="container" style="position: static;max-width: 1200px;margin: 0 auto;background: #FF5556;padding: 100px 15px;text-align: center;">
	    <h1 style="text-shadow: 10px 10px 10px rgb(0, 0, 0);">Congratulations! Your Mail has been sent Successfully  from '.$email.'  </h1>
	    <a href="index.html" style="background: #ffffff;text-decoration: none;color: #FF5556; border-radius: 5px; font-weight: 700;padding: 15px 30px;margin-top: 10px;display: inline-block;">Back To Home</a>
	</div>
</div>
</div>'


;?>