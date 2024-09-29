<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../src/Application/Controllers/AccionesUsuarios.php';
require '../src/Application/Controllers/Operaciones.php';

$app = new \Slim\App;

$app->get('/', 'index');

//GESTION DE REGISTROS
$app->group('/usuarios', function ($app) {
	//GET Recuperar todos los usuarios
	$app->get('/', 'getAll');
	
	//GET Recuperar usuario por ID
	$app->get('/{id:[0-9]+}', 'getId');

	//POST Insertar un nuevo usuario
	$app->post('/insertar', 'insert');

	//PUT Modificar usuario
	$app->put('/modificar/{id:[0-9]+}', 'update');

	//DELETE Eliminar usuario
	$app->delete('/eliminar/{id:[0-9]+}', 'delete');
	
});

//GESTION DE OPERACIONES
$app->group('/operaciones', function ($app) {
	
	//GET Recuperar tipo id
	$app->get('/tipoid', 'getTipoId');

	//GET Recuperar profesion
	$app->get('/profesion', 'getProfesion');
	
});

//GESTION DE LOGIN
$app->group('/login', function ($app) {
	
	//GET Recuperar login
	$app->get('/', 'getLogin');
	
});

