<?php
	class db{
		private $dbHost = 'localhost';
		private $dbUser = 'crud';
		private $dbPass = '*_Crud2020_*';
		private $dbName = 'crud';

		public function getDB(){
			try{
				$mysqlconnect = "mysql:host=$this->dbHost;dbname=$this->dbName";
				$dbConnection = new PDO($mysqlconnect, $this->dbUser, $this->dbPass);
				$dbConnection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$dbConnection -> exec("SET CHARACTER SET utf8");
			} catch (Exception $e) {
				echo "No se pudo abrir la base de datos, intentelo de nuevo";
			}
			return $dbConnection;
		}
	}
?>