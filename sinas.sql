create database sinas;

use sinas;

create table usuario(
id_usuario int primary key auto_increment,
nome varchar(255) not null unique,
email varchar(255) not null unique,
senha varchar(255) not null
);

create table comunidade(
id_comunidade int primary key auto_increment,
UF varchar(255) not null,
Cidade varchar(255) not null,
Bairro varchar(255) not null
);

SELECT * 
FROM usuario 
CROSS JOIN comunidade;

select * from comunidade;
select * from usuario;
