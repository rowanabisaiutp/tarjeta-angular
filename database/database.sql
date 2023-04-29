CREATE DATABASE tarjeta_presentacion_db;

USE tarjeta_presentacion_db;

CREATE TABLE cliente(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255),
    especialidad VARCHAR(255),
    num_tel INT(11) DEFAULT NULL,
    imagen VARCHAR(255),
    municipio VARCHAR(255),
    estado VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

RENAME TABLE cliente to clientes;

DESCRIBE clientes;

SELECT * FROM clientes;