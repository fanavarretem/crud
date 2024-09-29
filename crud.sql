-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-08-2023 a las 07:32:05
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud`
--
CREATE DATABASE IF NOT EXISTS `crud` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `crud`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesiones`
--

DROP TABLE IF EXISTS `profesiones`;
CREATE TABLE `profesiones` (
  `id_profesion` int(11) NOT NULL,
  `nombre_profesion` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `profesiones`
--

INSERT INTO `profesiones` (`id_profesion`, `nombre_profesion`) VALUES
(1, 'Ingeniero en Telemática'),
(2, 'Ingeniero Civil'),
(3, 'Ingeniero Forestal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

DROP TABLE IF EXISTS `registros`;
CREATE TABLE `registros` (
  `id_registro` int(11) NOT NULL,
  `numero_id` bigint(15) NOT NULL,
  `nombres` varchar(20) NOT NULL,
  `apellidos` varchar(20) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` bigint(15) NOT NULL,
  `id_profesion_fk` int(11) NOT NULL,
  `id_tipoident_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id_registro`, `numero_id`, `nombres`, `apellidos`, `direccion`, `telefono`, `id_profesion_fk`, `id_tipoident_fk`) VALUES
(56, 51598597, 'LUZ BERENICE', 'MARTINEZ GARCIA', 'CALLE 45', 3163320602, 2, 1),
(62, 123, 'FABIO ANDRES', 'NAVARRETE MARTINEZ', 'CALLE FALSA 123', 3152002928, 1, 1),
(70, 12341234, 'FABIO ANDRES', 'NAVARRETE MARTINEZ', 'CALLE FALSA 123', 3163320602, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_ident`
--

DROP TABLE IF EXISTS `tipos_ident`;
CREATE TABLE `tipos_ident` (
  `id_tipo_ident` int(11) NOT NULL,
  `tipo_ident` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `tipos_ident`
--

INSERT INTO `tipos_ident` (`id_tipo_ident`, `tipo_ident`) VALUES
(1, 'Cédula de Ciudadanía'),
(2, 'Tarjeta de Identidad'),
(3, 'NIT');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `clave_usuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre_usuario`, `clave_usuario`) VALUES
(1, 'FABIO', 'ASDF1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `profesiones`
--
ALTER TABLE `profesiones`
  ADD PRIMARY KEY (`id_profesion`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id_registro`),
  ADD UNIQUE KEY `numero_id` (`numero_id`),
  ADD KEY `FK_id_profesion` (`id_profesion_fk`) USING BTREE,
  ADD KEY `FK_id_tipoident` (`id_tipoident_fk`) USING BTREE;

--
-- Indices de la tabla `tipos_ident`
--
ALTER TABLE `tipos_ident`
  ADD PRIMARY KEY (`id_tipo_ident`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `profesiones`
--
ALTER TABLE `profesiones`
  MODIFY `id_profesion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id_registro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `registros`
--
ALTER TABLE `registros`
  ADD CONSTRAINT `registros_ibfk_1` FOREIGN KEY (`id_profesion_fk`) REFERENCES `profesiones` (`id_profesion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `registros_ibfk_2` FOREIGN KEY (`id_tipoident_fk`) REFERENCES `tipos_ident` (`id_tipo_ident`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
