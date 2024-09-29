-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-09-2020 a las 08:05:20
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud`
--
CREATE DATABASE IF NOT EXISTS `crud` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `crud`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesiones`
--

CREATE TABLE `profesiones` (
  `id_profesion` int(11) NOT NULL,
  `nombre_profesion` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesiones`
--

INSERT INTO `profesiones` (`id_profesion`, `nombre_profesion`) VALUES
(1, 'Ingeniero en telemática'),
(2, 'Ingeniero civil');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id_registro` int(11) NOT NULL,
  `tipo_id` varchar(20) NOT NULL,
  `numero_id` bigint(15) NOT NULL,
  `nombres` varchar(20) NOT NULL,
  `apellidos` varchar(20) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `telefono` bigint(15) NOT NULL,
  `profesion` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_ident`
--

CREATE TABLE `tipos_ident` (
  `id_tipo_ident` int(11) NOT NULL,
  `tipo_ident` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipos_ident`
--

INSERT INTO `tipos_ident` (`id_tipo_ident`, `tipo_ident`) VALUES
(11, 'Cédula de ciudadanía'),
(12, 'Tarjeta de identidad'),
(13, 'NIT');

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
  ADD PRIMARY KEY (`id_registro`);

--
-- Indices de la tabla `tipos_ident`
--
ALTER TABLE `tipos_ident`
  ADD PRIMARY KEY (`id_tipo_ident`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `profesiones`
--
ALTER TABLE `profesiones`
  MODIFY `id_profesion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id_registro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
