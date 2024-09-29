<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

function getTipoId(Request $request, Response $response){
    $sql = "SELECT * FROM tipos_ident";
	try{
		$db = new db();
		$db = $db->getDb();
		$result = $db->query($sql);

		if ($result->rowCount() > 0) {
			$tipoId = $result->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($tipoId);
		}else{
			echo json_encode("No hay registros en la Base de Datos");
		}

		$result = NULL;
		$db = NULL;


	}catch(PDOException $e){
		echo '{"error" : {"text":'.$e->getMessage().'}';
	}
}

function getProfesion(Request $request, Response $response){
    $sql = "SELECT * FROM profesiones";
	try{
		$db = new db();
		$db = $db->getDb();
		$result = $db->query($sql);

		if ($result->rowCount() > 0) {
			$profesiones = $result->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($profesiones);
		}else{
			echo json_encode("No hay registros en la Base de Datos");
		}

		$result = NULL;
		$db = NULL;


	}catch(PDOException $e){
		echo '{"error" : {"text":'.$e->getMessage().'}';
	}
}