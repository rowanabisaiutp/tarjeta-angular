CREATE DATABASE tarjeta_presentacion_db;
drop database tarjeta_presentacion_db;
USE tarjeta_presentacion_db;

CREATE TABLE clientes(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  especialidad VARCHAR(50),
  num_tel NUMERIC(10,0),
  imagen VARCHAR(255),
  municipio VARCHAR(50),
  estado VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
