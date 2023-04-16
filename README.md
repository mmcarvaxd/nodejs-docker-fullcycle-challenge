<h1 align="center">
🐳<br>[Challenge] Node.js application with a MySQL database and nginx as reverse proxy using docker compose - FullCycle
</h1>

## 📄 Description

[En]

This Repo is a challenge from FullCycle Course, which consists in make a Node.js application with a MySQL database and Nginx as reverse proxy. Node.js application must return "Full Cycle Rocks!" and a list of people that it is persisted on MySQL database. The entrypoint must be in port 8080 and Nginx must listen the requests and proxy to the Node.js application

[PT]

Este Repo é um desafio do curso FullCycle, ele consite em fazer uma aplicação Node.js com um banco de dados MySQL e Nginx como um proxy reverso. A Aplicação Node.js deve retornar "Full Cycle Rocks!" e uma lista de pessoas que estão persistidas no banco de dados MySQL. A Entrada deve ser recebida na porta 8080 e o Nginx deve escutar as requisições e encaminhar para a aplicação Node.js

## Commands Used

To run the compose

```bash
  docker-compose up --build
```