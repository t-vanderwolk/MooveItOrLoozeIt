<?php
$servername='Mooveitorloozit';
$username='root';
$password='';
$dbname = "crud";
$conn=mysqli_connect($servername,$username,$password,"$dbname");
if(!$conn){
   die('Could not Connect My Sql:' .mysql_error());
}
?>