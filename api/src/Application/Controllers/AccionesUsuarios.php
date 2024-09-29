<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

function getAll(Request $request, Response $response){
	//$sql = "SELECT * FROM registros";
	$sql = "SELECT tipos_ident.tipo_ident as tipo_id, registros.numero_id, registros.nombres, registros.apellidos, registros.direccion, registros.telefono, profesiones.nombre_profesion as profesion, registros.id_profesion_fk, registros.id_tipoident_fk FROM registros INNER JOIN tipos_ident ON registros.id_tipoident_fk = tipos_ident.id_tipo_ident INNER JOIN profesiones ON registros.id_profesion_fk = profesiones.id_profesion;";
	try{
		$db = new db();
		$db = $db->getDb();
		$result = $db->query($sql);

		if ($result->rowCount() > 0) {
			$usuarios = $result->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($usuarios);
		}else{
			echo json_encode("No hay registros en la Base de Datos");
		}

		$result = NULL;
		$db = NULL;

	}catch(PDOException $e){
		echo '{"error" : {"text":'.$e->getMessage().'}';
	}
}

//GET Recuperar usuario por ID
function getId(Request $request, Response $response){
	$idUsuario = $request->getAttribute('id');
	$sql = "SELECT * FROM registros WHERE numero_id = $idUsuario";
	try{
		$db = new db();
		$db = $db->getDb();
		$result = $db->query($sql);

		if ($result->rowCount() > 0) {
			$usuario = $result->fetchAll(PDO::FETCH_OBJ);
			echo json_encode($usuario);
		}else{
			echo json_encode("Registro no existe");
		}

		$result = NULL;
		$db = NULL;

	}catch(PDOException $e){
		echo '{"error" : {"text":'.$e->getMessage().'}';		
	}	
}

//POST Insertar un nuevo usuario
function insert(Request $request, Response $response){

	$tipoIdUsuario = $request->getParam('id_tipoident_fk');
	$idUsuario = $request->getParam('numero_id');
	$nombreUsuario = $request->getParam('nombres');
	$apellidoUsuario = $request->getParam('apellidos');
	$direccionUsuario = $request->getParam('direccion');
	$telefonoUsuario = $request->getParam('telefono');
	$profesionUsuario = $request->getParam('id_profesion_fk');

	if ($idUsuario==""||$nombreUsuario==""||$apellidoUsuario==""||$direccionUsuario=="") {
		echo json_encode("vacios");
	}else{
		$sql = "SELECT * FROM registros WHERE numero_id = $idUsuario";
		try{
			$db = new db();
			$db = $db->getDb();
			$result = $db->query($sql);
	
			if(isset($result)&&$result->fetch(PDO::FETCH_ASSOC)){
				echo json_encode("existe");
			}else{
				$sql="INSERT INTO registros 
			(id_tipoident_fk, numero_id, nombres, apellidos, direccion, telefono, id_profesion_fk) 
			VALUES( :idType, :idNumber, :firstName, :lastName, :address, :phone, :profession )";

				try{
					$db = new db();
					$db = $db->getDb();
					$result = $db->prepare($sql);
					$result->bindParam(':idType',$tipoIdUsuario);
					$result->bindParam(':idNumber',$idUsuario);
					$result->bindParam(':firstName',$nombreUsuario);
					$result->bindParam(':lastName',$apellidoUsuario);
					$result->bindParam(':address',$direccionUsuario);
					$result->bindParam(':phone',$telefonoUsuario);
					$result->bindParam(':profession',$profesionUsuario);

					$result->execute();
					echo json_encode("insertado");

					$result = NULL;
					$db = NULL;

				}catch(PDOException $e){
					echo '{"error" : {"text":'.$e->getMessage().'}';
				}
			}
	
			$result = NULL;
			$db = NULL;
	
		}catch(PDOException $e){
			echo '{"error" : {"text":'.$e->getMessage().'}';
			
		}		
	}
}

//PUT Modificar usuario
function update(Request $request, Response $response){

	$tipoIdUsuario = $request->getParam('id_tipoident_fk');
	$idUsuario = $request->getParam('numero_id');
	$nombreUsuario = $request->getParam('nombres');
	$apellidoUsuario = $request->getParam('apellidos');
	$direccionUsuario = $request->getParam('direccion');
	$telefonoUsuario = $request->getParam('telefono');
	$profesionUsuario = $request->getParam('id_profesion_fk');

	if ($idUsuario==""||$nombreUsuario==""||$apellidoUsuario==""||$direccionUsuario=="") {
		echo json_encode("vacios");
	}else{
		$sql = "SELECT * FROM registros WHERE numero_id = $idUsuario";
		try{
			$db = new db();
			$db = $db->getDb();
			$result = $db->query($sql);
	
			if(isset($result) && !$result->fetch(PDO::FETCH_ASSOC)){
				echo json_encode("inexistente");
			}else{
				$sql="UPDATE registros SET
				id_tipoident_fk = :idType,
				numero_id = :idNumber,
				nombres = :firstName,
				apellidos = :lastName,
				direccion = :address,
				telefono = :phone,
				id_profesion_fk = :profession		
				WHERE numero_id = $idUsuario";

				try{
					$db = new db();
					$db = $db->getDb();
					$result = $db->prepare($sql);
					
					$result->bindParam(':idType',$tipoIdUsuario);
					$result->bindParam(':idNumber',$idUsuario);
					$result->bindParam(':firstName',$nombreUsuario);
					$result->bindParam(':lastName',$apellidoUsuario);
					$result->bindParam(':address',$direccionUsuario);
					$result->bindParam(':phone',$telefonoUsuario);
					$result->bindParam(':profession',$profesionUsuario);
					$result->execute();
					echo json_encode("actualizado");

					$result = NULL;
					$db = NULL;

				}catch(PDOException $e){
					echo '{"error" : {"text":'.$e->getMessage().'}';
				}
				$result = NULL;
				$db = NULL;

			}
		}catch(PDOException $e){
			echo '{"error" : {"text":'.$e->getMessage().'}';
		}
	}	}

//DELETE Eliminar usuario
function delete(Request $request, Response $response){

	$idUsuario = $request->getAttribute('id');

	if ($idUsuario=="") {
		echo json_encode("vacios");
	}else{
		$sql = "SELECT * FROM registros WHERE numero_id = $idUsuario";
		try{
			$db = new db();
			$db = $db->getDb();
			$result = $db->query($sql);
	
			if(isset($result) && !$result->fetch(PDO::FETCH_ASSOC)){
				echo json_encode("inexistente");
			}else{
				$sql="DELETE FROM registros WHERE numero_id = $idUsuario";

				try{
					$db = new db();
					$db = $db->getDb();
					$result = $db->prepare($sql);
					$result->execute();

					if ($result->rowCount() > 0) {
						echo json_encode("eliminado");
					}
					
					$result = NULL;
					$db = NULL;

				}catch(PDOException $e){
					echo '{"error" : {"text":'.$e->getMessage().'}';
				}
				$result = NULL;
				$db = NULL;
			}
		}catch(PDOException $e){
			echo '{"error" : {"text":'.$e->getMessage().'}';
		}
	}	
}

function index(Request $request, Response $response){
	$response->getBody( )->write('API CONSULTA DATOS');
	return $response;
}