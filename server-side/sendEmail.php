<?php
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-1e0e35d7a87836a18d57458ee8b72fb5');
$domain = "sandboxb72c261a4a944926a7b229df938bbfc3.mailgun.org";

# User Name
$name = htmlspecialchars($_POST['name']);
# User Email Address
$addr = htmlspecialchars($_POST['email']);

$destination = $name . "<" . $addr . ">";
$RyanEmail = "Ryan " . htmlspecialchars('thaiandoloco@gmail.com');

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
  'from'    => 'Hands On Helping<DoNotReply@handsonhelping.org>',
  'to'      => $destination,
  'subject' => 'Hands On Helping',
  'text'    => 'Thank you for signing up for updates from http://HandsOnHelping.org/'
));

$result = $mgClient->sendMessage($domain, array(
  'from'    => 'Hands On Helping<DoNotReply@handsonhelping.org>',
  'to'      => $RyanEmail,
  'subject' => 'New Email Signup From Hands On Helping',
  'text'    => "New User Signed Up!" . "\n" . "Name: " . $name . "\n" . "Email: " . $addr
));

?>
