<?php
session_start();

$email = trim($_POST['email']) ?? null;
$password = explode(' ', trim($_POST['password'])) ?? null;   
$_SESSION['auth-val'] = [];

if(!filter_var($email, FILTER_VALIDATE_EMAIL) || isHtml($email)) {
    $_SESSION['auth-val']['auth'] = 'Неверный email';
}
if(empty($password)|| sizeof($password) > 1 || strlen($password[0]) < 8) {
    $_SESSION['auth-val']['auth'] = 'Неверный пароль';
}

if(!empty($_SESSION['auth-val'])){
    header('Location: /index.php?reg=1');
    exit();
} else{

    require_once __DIR__ . '/config.php';
    try {
        $conn = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);

    }
    catch(PDOException $e) {
        die('Что-то пошло не так: '. $e->getMessage());
    }

    $stmt = $conn->prepare("SELECT * FROM users WHERE  `email` = :email");
    $stmt -> execute(['email'=>$email]);
    $user = $stmt -> fetch(PDO::FETCH_ASSOC);

    if(!$user){
        $_SESSION['auth-val']['auth'] = false;
        header('Location: /index.php?reg=1');
        exit();
    }

    if(!password_verify($password[0], $user['password'])){
        $_SESSION['auth-val']['auth'] = false;
        header('Location: /index.php?reg=1');
        exit();
    }

    $_SESSION['auth'] = true;
    header('Location: /index.php');
}

function isHtml($string)
{
  return preg_match("/<[^<]+>/",$string) != 0;
} 
