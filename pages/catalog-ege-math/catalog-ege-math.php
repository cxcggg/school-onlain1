<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="../../css/normalize.css">
    <link rel="stylesheet" href="../../css/bootstrap.min.css">
    <link rel="stylesheet" href="../../css/catalog.css">
    <link rel="icon" type="image/png" href="../../img/main-icon.png">
    <title>ЕГЭ - 2024</title>
</head>
<?php 
    session_start();
    if (!isset($_SESSION['auth'])) {
        $_SESSION['forse-auth'] = true;
        header('Location: /index.php?reg=1');
        exit();
    }
?>
<body>
    <div class="wrapper">
        <div class="body-content">
            <section class="body-content__section main-section">
                <div class="side-section">
                    <div class="side-section__button-back"></div>
                    <div class="side-section__main-text">
                        <div class="menu-logo">
                            <a href="../../index.html" class="logo-olimpys"></a>
                        </div>
                        <ul class="side-section__list">
                            <li class="side-section__item"><a href="" class="side-section__link active">Видеоуроки</a>
                            </li>
                            <li class="side-section__item"><a
                                    href="../catalog-ege-math-2024-tasks/catalog-ege-math-tasks.html"
                                    class="side-section__link">Каталог заданий</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>



        <div class="container-fluid container-limit">
            <div class="row">
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-12">
                    <span class="subject-name">ЕГЭ - Математика</span>
                    <h1 class="catalog-heading">Видеоуроки</h1>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="catalog-info">
                        <h3 class="catalog-info__heding">Бесплатный каталог уроков по математике.</h3>
                        <p class="catalog-info__description">Здесь вы можете ознакомиться с решением большинства типовых
                            задач разной сложности.</p>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center folders-row">
                <div class="col-xxl-4 col-xl-6 col-lg-8 col-md-12 folder-col">
                    <a href="../catalog-ege-2024-math/ege-2024-math.html">
                        <div class="folder-card">
                            <img src="../../img/folder.png" alt="folder" class="folder-img">
                            <strong class="folder-name">ЕГЭ 2024</strong>
                        </div>
                    </a>
                </div>
                <div class="w-100"></div>
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-12 folder-col _hidden">
                    <a href="">
                        <div class="folder-card">
                            <img src="../../img/folder.png" alt="folder" class="folder-img">
                            <strong class="folder-name">ОГЭ 2024</strong>
                        </div>
                    </a>
                </div>
                <div class="w-100"></div>
                <div class="col-xxl-3 col-xl-4 col-lg-6 col-md-12 folder-col _hidden">
                    <a href="">
                        <div class="folder-card">
                            <img src="../../img/folder.png" alt="folder" class="folder-img">
                            <strong class="folder-name">Олимпиады 2024</strong>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <script src="../../js/catalog.js"></script>
</body>

</html>