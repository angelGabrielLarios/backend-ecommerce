-- Creación de tablas para las entidades identificadas

-- Tabla para la entidad Usuario
CREATE TABLE Usuario (
    NIF VARCHAR(20) PRIMARY KEY,
    correo VARCHAR(50) UNIQUE,
    nombre VARCHAR(50),
    direccion VARCHAR(100),
    telefono VARCHAR(15),
    /* login VARCHAR(20) UNIQUE, */
    password VARCHAR(255)
);

-- Tabla para la entidad Sección
CREATE TABLE Seccion (
    codigo_seccion INT AUTO_INCREMENT PRIMARY KEY ,
    nombre VARCHAR(50),
    descripcion TEXT,
    fecha_creacion DATETIME
);

-- Tabla para la entidad Visita
CREATE TABLE Visita (
    usuario_nif VARCHAR(20),
    codigo_seccion INT,
    fecha_visita DATETIME,
    FOREIGN KEY (usuario_nif) REFERENCES Usuario(NIF),
    FOREIGN KEY (codigo_seccion) REFERENCES Seccion(codigo_seccion)
);

-- Tabla para la entidad Carrito
CREATE TABLE Carrito (
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    usuario_nif VARCHAR(20),
    fecha_creacion DATETIME,
    FOREIGN KEY (usuario_nif) REFERENCES Usuario(NIF)
);

-- Tabla para la entidad Producto
CREATE TABLE Producto (
    codigo_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    descripcion TEXT,
    precio DECIMAL(10, 2)
);

-- Tabla de relación entre Usuario y Producto para representar la compra
CREATE TABLE Usuario_Producto (
    usuario_nif VARCHAR(20),
    codigo_producto INT,
    cantidad INT,
    PRIMARY KEY (usuario_nif, codigo_producto),
    FOREIGN KEY (usuario_nif) REFERENCES Usuario(NIF),
    FOREIGN KEY (codigo_producto) REFERENCES Producto(codigo_producto)
);

-- Tabla de relación entre Sección y Producto
CREATE TABLE Seccion_Producto (
    codigo_seccion INT,
    codigo_producto INT,
    FOREIGN KEY (codigo_seccion) REFERENCES Seccion(codigo_seccion),
    FOREIGN KEY (codigo_producto) REFERENCES Producto(codigo_producto)
);




INSERT INTO Seccion (nombre, descripcion, fecha_creacion) VALUE('sillas gammers', 'sillas gammers', NOW());

INSERT INTO Seccion (nombre, descripcion, fecha_creacion) VALUE('ssd', 'ssd', NOW());

INSERT INTO Seccion (nombre, descripcion, fecha_creacion) VALUE('tarjetas graficas', 'tarjetas graficas', NOW());

INSERT INTO Seccion (nombre, descripcion, fecha_creacion) VALUE('mobo', 'mobo', NOW());


ALTER TABLE Producto ADD url_image VARCHAR(255);



/* sillas*/
INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('SILLA COUGAR TERMINATOR', 'SILLA COUGAR TERMINATOR',13467.06,'https://m.media-amazon.com/images/I/51yR-MTXmVL._AC_UL400_.jpg');


INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('SILLA COUGAR ARGO ONE NEGRO/NARANJA', 'SILLA COUGAR ARGO ONE NEGRO/NARANJA',7565.58 ,'https://m.media-amazon.com/images/I/512Tq6ZNH9L._AC_UL400_.jpg');

INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('SILLA COUGAR ARGO ONE NEGRO', 'SILLA COUGAR ARGO ONE NEGRO', 7563.59,  'https://m.media-amazon.com/images/I/81LbABJluJL._AC_UL400_.jpg');


/* ssd */
INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('KINGSTON SSD 2000GB FURY RENEGADE C/DISIPADOR M.2 NVMe PCI EXPRESS 4.0 SFYRDK/2000G', 'KINGSTON SSD 2000GB FURY RENEGADE C/DISIPADOR M.2 NVMe PCI EXPRESS 4.0 SFYRDK/2000G',2869.99 ,'https://m.media-amazon.com/images/I/71XsT+ayLrL._AC_UL400_.jpg');

INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('KINGSTON SSD 1000GB FURY RENEGADE C/DISIPADOR M.2 NVMe PCI EXPRESS 4.0 SFYRSK/1000G', 'KINGSTON SSD 1000GB FURY RENEGADE C/DISIPADOR M.2 NVMe PCI EXPRESS 4.0 SFYRSK/1000G',2067.59,'https://m.media-amazon.com/images/I/71XsT+ayLrL._AC_UL400_.jpg');

INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('KINGSTON SSD 500GB FURY RENEGADE C/DISIPADOR M.2 NVMe PCI EXPRESS 4.0 SFYRSK/500G', 'KINGSTON SSD 500GB FURY RENEGADE C/DISIPADOR M.2 NVMe PCI EXPRESS 4.0 SFYRSK/500G',1587.11,'https://m.media-amazon.com/images/I/71XsT+ayLrL._AC_UL400_.jpg');


/* tarjetas graficas */
INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('ASUS PH-GTX1650-O4GD6-P-EVO  4GB ', 'ASUS PH-GTX1650-O4GD6-P-EVO  4GB',3741.73, 'https://m.media-amazon.com/images/I/81FXdRC1BOL._AC_UL400_.jpg');

INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('ASUS ROG-STRIX-RTX4060-O8G- OC 8GB', 'ASUS ROG-STRIX-RTX4060-O8G- OC 8GB', 8018.44 ,  'https://m.media-amazon.com/images/I/8196MD83TwL._AC_UL400_.jpg');

INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('ASUS TUF-RTX3050-O8G- OC 8GB ', 'ASUS TUF-RTX3050-O8G- OC 8GB',7023.35, 'https://m.media-amazon.com/images/I/81LbABJluJL._AC_UL400_.jpg');


/* mobo */
INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('BIOSTAR X670E VALKYRIE 5  PCIE 5.0', 'BIOSTAR X670E VALKYRIE 5  PCIE 5.0  ', 7198.42 , 'https://m.media-amazon.com/images/I/51J6otMuBOL._AC_SX450_.jpg');

INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('BIOSTAR B650EGTQ 5   PCIE 5.0', 'BIOSTAR B650EGTQ 5   PCIE 5.0',  440067  , 'https://m.media-amazon.com/images/I/61MxRFpzO-S.__AC_SY300_SX300_QL70_ML2_.jpg');

INSERT INTO Producto (nombre, descripcion, precio, url_image) VALUES ('ASROCK X670E PG LIGHTNING 5', 'ASROCK X670E PG LIGHTNING  5 ',   5602.00   , 'https://m.media-amazon.com/images/I/81iFMSIV2hL.__AC_SY300_SX300_QL70_ML2_.jpg');



INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(1, 19);
INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(1, 20);
INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(1, 21);


INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(2, 22);
INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(2, 23);
INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(2, 24);

INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(3, 25);
INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(3, 26);
INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(3, 27);

INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(4, 28);
INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(4, 29);
INSERT INTO Seccion_Producto (codigo_seccion, codigo_producto) VALUE(4, 30);

