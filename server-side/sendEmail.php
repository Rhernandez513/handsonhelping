<?php
require 'vendor/autoload.php';

#ENV VARS
$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();
$MAILGUN_KEY = getenv('MAILGUN_KEY');
$DOMAIN = getenv('DOMAIN');
$SENTTOEMAIL = getenv('SENTTOEMAIL');

# MAILGUN
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun($MAILGUN_KEY);
$domain = $DOMAIN;

# User Name
$name = htmlspecialchars($_POST['name']);
# User Email Address
$addr = htmlspecialchars($_POST['email']);

$destination = $name . "<" . $addr . ">";
$RyanEmail = "Ryan " . htmlspecialchars($SENDTOEMAIL);

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
