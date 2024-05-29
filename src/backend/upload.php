<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Requested-With");

header('content-type: application/json; charset=utf-8');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['file']['name']);

        // Verifica si la carpeta de uploads existe, si no, la crea
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
            echo json_encode(['response' => 'upload_ok']);

            //aca mandamos el correo





        } else {
            echo json_encode(['response' => "upload_not_ok"]);
        }
    } else {
        echo json_encode(['response' => "upload_not_ok"]);
    }
} else {
    echo json_encode(['response' => "upload_not_ok"]);
}
?>
