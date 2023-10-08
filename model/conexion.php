<?php 
    $contrasena = "root";
    $usuario = "root";
    $nombre_bd = "crud_clinica";

    try {
        $bd = new PDO(
            'mysql:host=localhost;
            dbname ='.$nombre_bd,
            $usuario,
            $contrasena
        );
    } catch (Exception $e) {
        echo "Problema con la conexión: " .$e->getMessage();
    }
?>