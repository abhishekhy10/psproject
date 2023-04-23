<?php
$fName=$_POST['fName'];
$Lname=$_POST['Lname'];
$email=$_POST['email'];
$Mnumber=$_POST['Mnumber'];
$address=$_POST['address'];
$district=$_POST['district'];
$state=$_POST['state'];
$slct1=$_POST['slct1'];
$slct2=$_POST['slct2'];
$pin=$_POST['pin'];
$anumber=$_POST['anumber'];
$djoin=$_POST['djoin'];
$occupation=$_POST['occupation'];
$nameorg=$_POST['nameorg'];
$occAddress=$_POST['occAddress'];
$postheld=$_POST['postheld'];
$simage=$_POST['simage'];
$city = $_POST['city'];
$frname=$_POST['frname'];
$phoneref1=$_POST['phoneref1'];
$srname=$_POST['srname'];
$phoneref2=$_POST['phoneref2'];
$aimage=$_POST['aimage'];
$pimage=$_POST['pimage'];

$staying = $_POST['staying'];

$servername = "localhost";
$username = "root";
$passwords = "";
$dbname = "psproject";

// Create connection
$conn = mysqli_connect($servername,$username,$passwords,$dbname);
	if(!$conn){
		echo "Not able to";
		
    }
    else{
        echo "Sucessful";
    }
$sql = "INSERT INTO `pgreg`(`fName`, `Lname`, `email`, `Mnumber`,`address`, `district`, `state`,`staying`,`slct1`, `slct2`, `pin`, `anumber`, `djoin`, `occupation`, `nameorg`, `occAddress`, `postheld`, `simage`, `city`, `frname`, `phoneref1`, `srname`, `phoneref2`, `aimage`, `pimage`) VALUES ('[$fName]','[$Lname]','[$email]','[$Mnumber]','[$address]','[$district]','[$state]','[$staying]','[$slct1]','[$slct2]','[$pin]','[$anumber]','[$djoin]','[$occupation]','[$nameorg]','[$occAddress]','[$postheld]','[$simage]','[$city]','[$frname]','[$phoneref1]','[$srname]','[$phoneref2]','[$aimage]','[$pimage]')";

    if($conn->query($sql) === TRUE) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
    header("Location: http://localhost/psproject/ty.html");
    exit;
?>