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
    PRIMARY KEY (usuario_nif, codigo_seccion, fecha_visita),
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
    PRIMARY KEY (codigo_seccion, codigo_producto),
    FOREIGN KEY (codigo_seccion) REFERENCES Seccion(codigo_seccion),
    FOREIGN KEY (codigo_producto) REFERENCES Producto(codigo_producto)
);




INSERT INTO Seccion (nombre, descripcion, fecha_creacion) VALUE('sillas gammers', 'sillas gammers', NOW());

INSERT INTO Seccion (nombre, descripcion, fecha_creacion) VALUE('ssd', 'ssd', NOW());

INSERT INTO Seccion (nombre, descripcion, fecha_creacion) VALUE('tarjetas graficas', 'tarjetas graficas', NOW());

INSERT INTO Seccion (nombre, descripcion, fecha_creacion) VALUE('mobo', 'mobo', NOW());

