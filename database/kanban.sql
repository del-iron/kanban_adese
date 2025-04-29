-- Script para criação do banco de dados Kanban
CREATE DATABASE kanban;
USE kanban;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    status ENUM('todo', 'in_progress', 'done') DEFAULT 'todo',
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
