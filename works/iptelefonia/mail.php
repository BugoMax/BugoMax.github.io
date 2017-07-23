<?php

    $name = $_GET['name'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $message = "Поздравляем, $name, отправка сообщений на почту $email and $phone работает";

    $to = "maxokay823@gmail.com";
    $from = "noreply-bugomax.github.io";
    $subject = "Письмо с примера простой формы сайта"; // Задаем тему письма
    $headers = "From: $from\r\nReply-To: $to\r\nContent-type: text/html; charset=utf-8\r\n"; 

    if (mail($to, $subject, $message, $headers)) {
        echo "<p>Сообщение успешно отправлено</p>";
    }
    else {
        echo "<p>Что-то пошло не так, как планировалось</p>";
    }
?>