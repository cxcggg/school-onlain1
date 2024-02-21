<?php

session_start();

$name = trim($_POST['name']);
$email = trim($_POST['email']);
$password = explode(' ', trim($_POST['password']));         
$passwordCheck = trim($_POST['passwordCheck']);
$check = $_POST['check'];

$_SESSION['validaiton'] = [];

if(empty($name) || isHtml($name) || !badSymbols($name)){
    $_SESSION['validation']['name'] = 'Имя должно содержать 2 и более символов и содержать только буквы кириллицы';
}
if(!filter_var($email, FILTER_VALIDATE_EMAIL) || isHtml($email)) {
    $_SESSION['validation']['email'] = 'Неверный формат email';
}
if(empty($password)|| sizeof($password) > 1 || strlen($password[0]) < 8) {
    $_SESSION['validation']['password'] = 'Пароль должен содержать от 8 символов';
}
if($password[0] !== $passwordCheck) {
    $_SESSION['validation']['passwordCheck'] = 'Пароли не совпадают';
}
if($check !== 'on') {
    $_SESSION['validation']['check'] = 'not check';
}


if(!empty($_SESSION['validation'])){
    header('Location: /index.php?reg=0');
    exit();
}
else{
    require_once __DIR__ . '/config.php';

    try {
        $conn = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);

    }
    catch(PDOException $e) {
        die('Что-то пошло не так: '. $e->getMessage());
    }

    $query = "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)";
    $params = [
        'name' => $name,
        'email' => $email,
        'password' => password_hash($passwordCheck, PASSWORD_DEFAULT),
    ];
    $stmt = $conn->prepare($query);
    
    try {
        $stmt -> execute($params);
    }
    catch(PDOException $e) {
        $_SESSION['validation']['email'] = 'Такой email уже зарегестрирован';
        header('Location: /index.php?reg=0');
        exit();
    }
    header('Location: /index.php?reg=1');
    exit();
}

function isHtml($string)
{
  return preg_match("/<[^<]+>/",$string) != 0;
} 

function badSymbols($string)
{
    return preg_match('/^[А-Яа-я]+$/u', $string) != 0;
} 