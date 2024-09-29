<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;


require '../src/Infrastructure/Persistence/conexion.php';
require '../src/Application/routes.php';

//Cors
header('Access-Control-Allow-Origin:*'); 
header('Access-Control-Allow-Headers:X-Request-With');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Run app
$app->run();