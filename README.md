# Projeto de API com Node.js e SQLite

Este é um projeto de API desenvolvido em Node.js, utilizando o framework Express para lidar com requisições HTTP. O objetivo deste projeto é fornecer um exemplo de como criar uma API RESTful utilizando Node.js e SQLite como banco de dados.

## Funcionalidades Principais

- **Express**: Utilizamos o framework Express para lidar com as requisições HTTP, facilitando o desenvolvimento de rotas e endpoints.
- **Nodemon**: O Nodemon é utilizado para reiniciar automaticamente o servidor sempre que houver uma alteração no código, agilizando o processo de desenvolvimento.
- **BeekeeperDB**: Utilizamos o BeekeeperDB como banco de dados alternativo, oferecendo uma solução leve e fácil de usar para armazenar dados.
- **Insomnia**: Para testar as diferentes rotas da API, recomendamos o uso da ferramenta Insomnia, que permite realizar requisições HTTP de forma simples e eficiente.

## Banco de Dados: SQLite

- **Migrations**: Utilizamos o conceito de migrations para automatizar a criação e atualização do banco de dados SQLite. Isso garante que a estrutura do banco de dados esteja sempre sincronizada com o código da aplicação.

## Funcionalidades da API

### CRUD de Usuários

- Cadastro de usuários
- Alteração de senha e email
- Exclusão de usuários
- Listagem de usuários

### CRUD de Notas

- Cadastro de notas
- Exibição de notas
- Exclusão de notas
- Listagem de notas

### CRUD de Tags

- Inserção de tags
- Exibição de tags

## Banco de Dados KNEX

- **Migrations**: Utilizamos o KNEX para criar as migrations responsáveis pela criação das tabelas de notas, tags e links no banco de dados.

## Utilização de Rotas

- Utilizamos rotas para lidar com requisições HTTP relacionadas a notas, tags e usuários, seguindo os princípios de uma arquitetura RESTful.

## Tratamento de Erros

- Utilizamos o arquivo `AppError.js` para tratar exceções e erros inesperados, garantindo a estabilidade e o bom funcionamento da aplicação.
