<?php 

$to = "gawr230@mail.ru"; // емайл получателя данных из формы 
$tema = "Форма обратной связи на PHP"; // тема полученного емайла 
$message = "Ваше имя: ".$_POST['input-name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['input-email']."<br>"; //полученное из формы name=email
$message .= "Тема: ".$_POST['input-theme']."<br>"; //полученное из формы name=message
$message .= "Сообщение: ".$_POST['desire']."<br>";
$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных

?>